"use client";

import { signIn } from "@/libs/logto";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect } from "react";

export const SignInRedirect: FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = async () => router.push(await signIn());
    handleRedirect();
  }, [router]);

  return null;
};
