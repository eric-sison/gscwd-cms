import { handleSignIn } from "@/libraries/handle-signin";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  await handleSignIn(searchParams);

  console.log(request.nextUrl);

  redirect("/");
}
