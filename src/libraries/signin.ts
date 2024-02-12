"use server";

import { getCookie, logtoClient, setCookies } from "./logto";

export const signIn = async () => {
  const { url, newCookie } = await logtoClient.handleSignIn(getCookie(), `http://localhost:3000/callback`);

  setCookies(newCookie);

  return url;
};
