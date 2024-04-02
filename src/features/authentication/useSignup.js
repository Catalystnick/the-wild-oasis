import { useMutation } from "@tanstack/react-query";
import React from "react";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function UseSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success("User has been created");
    },
  });

  return { signup, isLoading };
}
