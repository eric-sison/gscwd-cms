"use server";

import { getCookie, logtoClient, setCookies } from "./logto";

export const signOut = async () => {
  const url = await logtoClient.handleSignOut(getCookie());

  setCookies("");

  return url;
};
