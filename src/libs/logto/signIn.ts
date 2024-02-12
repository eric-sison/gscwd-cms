"use server";

import { logtoClient } from "./client";
import { getCookie, setCookies } from "./cookiesHandler";

export const signIn = async () => {
  const { url, newCookie } = await logtoClient.handleSignIn(getCookie(), process.env.LOGTO_CALLBACK!);

  setCookies(newCookie);

  return url;
};
