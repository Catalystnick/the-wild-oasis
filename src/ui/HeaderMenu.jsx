import React from "react";
import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import Button from "./Button";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <Button onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </Button>
      </li>
      <li>
        <DarkModeToggle/>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
