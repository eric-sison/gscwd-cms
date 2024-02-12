"use client";

import { signOut } from "@/libs/logto";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();

  const handleClick = async () => {
    const redirectUrl = await signOut();

    router.push(redirectUrl);
  };

  return <button onClick={handleClick}>Sign Out</button>;
};

export default SignOut;
