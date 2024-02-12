// libraries/logto.js

import LogtoClient from "@logto/next/server-actions";
import { cookies } from "next/headers";

export const logtoClient = new LogtoClient({
  endpoint: "https://z70jvy.logto.app/",
  appId: "iebk329btr66fy07kmrzt",
  appSecret: "y2qgQwoqxU8oMzUb5mruMhTPmsfAbgF7",
  baseUrl: "http://localhost:3000",
  cookieSecret: "1lmVxH4BRvxEKUv9X4U11bbdZrIi5Kdc",
  cookieSecure: process.env.NODE_ENV === "production",
});

const cookieName = `logto:iebk329btr66fy07kmrzt`;

export const setCookies = (value?: string) => {
  if (value === undefined) {
    return;
  }

  cookies().set(cookieName, value, {
    maxAge: 14 * 3600 * 24,
    secure: process.env.NODE_ENV === "production",
  });
};

export const getCookie = () => {
  return cookies().get(cookieName)?.value ?? "";
};
