import { SignInRedirect } from "@/components/features";
import { getLogtoContext } from "@/libs/logto";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const { isAuthenticated } = await getLogtoContext();

  if (isAuthenticated) redirect("/");

  return <SignInRedirect />;
}
