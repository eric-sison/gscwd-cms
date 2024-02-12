"use server";

import { logtoClient } from "./client";
import { getCookie } from "./cookiesHandler";

export const getLogtoContext = async () => {
  return await logtoClient.getLogtoContext(getCookie(), { getAccessToken: true });
};
