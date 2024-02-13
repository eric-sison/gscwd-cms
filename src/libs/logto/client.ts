import LogtoClient from "@logto/next/server-actions";

export const logtoClient = new LogtoClient({
  endpoint: process.env.LOGTO_END_POINT!,
  appId: process.env.LOGTO_APP_ID!,
  appSecret: process.env.LOGTO_APP_SECRET,
  baseUrl: process.env.LOGTO_BASE_URL!,
  cookieSecret: process.env.COOKIE_SECRET!,
  cookieSecure: process.env.NODE_ENV === "production",
  // resources: ["http://localhost:3784/api"],
  // scopes: ["read:order"],
});
