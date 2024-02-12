import SignOut from "@/components/feature/Signout";
import { getLogtoContext } from "@/libraries/get-logto-context";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext();

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    redirect("/auth");
  }

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col">
        Hello World!
        <SignOut />
      </div>
    </main>
  );
}
