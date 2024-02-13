"use server";

import { logtoClient } from "./client";
import { getCookie, setCookies } from "./cookiesHandler";

export const handleSignIn = async (url: string) => {
  const newCookie = await logtoClient.handleSignInCallback(getCookie(), url);
  setCookies(newCookie);
};
