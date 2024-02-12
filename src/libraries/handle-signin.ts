"use server";

import { getCookie, logtoClient, setCookies } from "./logto";
import { serialize } from "./serialize-url";

export const handleSignIn = async (searchParams: Record<string, string>) => {
  const search = serialize(searchParams);

  const newCookie = await logtoClient.handleSignInCallback(getCookie(), `http://localhost:3000/callback?${search}`);

  setCookies(newCookie);
};
