"use server";

import { cookies } from "next/headers";

const cookieName = `logto:${process.env.LOGTO_APP_ID}`;

export const setCookies = (value?: string) => {
  if (value === undefined) return;

  cookies().set(cookieName, value, {
    maxAge: 14 * 3600 * 24,
    secure: process.env.NODE_ENV === "production",
  });
};

export const getCookie = () => {
  return cookies().get(cookieName)?.value ?? "";
};
