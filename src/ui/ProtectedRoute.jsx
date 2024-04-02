import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function ProtectedRoute({ children }) {
  //Load authenticated user
  const { isLoading, isAuthenticated, fetch } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && fetch !== "fetching")
      navigate("/login");
  }, [isAuthenticated, isLoading, navigate, fetch]);

  //show spinner while loading

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //if no authenticated user, redirect to login

  //if there is user, render app
  if (isAuthenticated) return children;
}
