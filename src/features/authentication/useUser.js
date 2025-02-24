import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCurrentUser } from "../../services/apiAuth";

export default function useUser() {
  const {
    isLoading,
    data: user,
    error,
    fetchStatus,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
    fetch: fetchStatus === "fetching",
  };
}
