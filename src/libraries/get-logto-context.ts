"use server";

import { getCookie, logtoClient } from "./logto";

export const getLogtoContext = async () => {
  return await logtoClient.getLogtoContext(getCookie());
};
