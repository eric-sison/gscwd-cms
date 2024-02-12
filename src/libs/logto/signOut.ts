"use server";

import { logtoClient } from "./client";
import { getCookie, setCookies } from "./cookiesHandler";

export const signOut = async () => {
  const url = await logtoClient.handleSignOut(getCookie());

  setCookies("");

  return url;
};
