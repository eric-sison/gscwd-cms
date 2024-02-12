"use server";

import { serializeUrlParams } from "@/utils/serializeUrl";
import { logtoClient } from "./client";
import { getCookie, setCookies } from "./cookiesHandler";

export const handleSignIn = async (searchParams: Record<string, string>) => {
  const search = serializeUrlParams(searchParams);

  const newCookie = await logtoClient.handleSignInCallback(
    getCookie(),
    `${process.env.LOGTO_CALLBACK}/callback?${search}`,
  );

  setCookies(newCookie);
};
