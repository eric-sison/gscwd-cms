"use client";

import { handleSignIn } from "@/libraries/handle-signin";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  searchParams: Record<string, string>;
};

export default function Callback({ searchParams }: Props) {
  //console.log(typeof searchParams);
  const router = useRouter();
  const redirectinRef = useRef(false);

  useEffect(() => {
    if (redirectinRef.current) {
      return;
    }
    redirectinRef.current = true;
    handleSignIn(searchParams).then(() => {
      router.push("/");
    });
  }, [router, searchParams]);

  return <div>Signing in...</div>;
}
