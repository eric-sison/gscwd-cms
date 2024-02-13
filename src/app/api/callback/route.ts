import { handleSignIn } from "@/libs/logto";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await handleSignIn(request.url);
  redirect("/");
}
