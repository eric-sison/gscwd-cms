"use server";

import { logtoClient } from "./client";
import { getCookie, setCookies } from "./cookiesHandler";

export const signOut = async () => {
  const url = await logtoClient.handleSignOut(getCookie(), process.env.LOGTO_POST_SIGNOUT_URL);
  setCookies("");
  return url;
};
