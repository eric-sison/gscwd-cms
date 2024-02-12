import SignOut from "@/components/feature/Signout";
import { getLogtoContext } from "@/libs/logto";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated, claims, accessToken } = await getLogtoContext();

  if (!isAuthenticated) {
    redirect("/auth");
  }

  console.log(claims, accessToken);

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col">
        Hello World!
        <SignOut />
      </div>
    </main>
  );
}
