"use client";

import { signIn } from "@/libraries/signin";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const handleClick = async () => {
    const redirectUrl = await signIn();

    router.push(redirectUrl);
  };

  return <button onClick={handleClick}>Sign In</button>;
};

export default SignIn;
