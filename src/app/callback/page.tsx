"use client";

import { handleSignIn } from "@/libs/logto";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type SignInCallbackProps = {
  searchParams: Record<string, string>;
};

export default function SignInCallback({ searchParams }: SignInCallbackProps) {
  const router = useRouter();
  const redirectingRef = useRef(false);

  useEffect(() => {
    if (redirectingRef.current) return;

    redirectingRef.current = true;

    handleSignIn(searchParams).then(() => router.push("/"));
  }, [router, searchParams]);

  return <div>Signing in...</div>;
}
