import { ChangePass } from "@/components/features/logto/ChangePass";
import SignOut from "@/components/features/logto/Signout";
import { getLogtoContext } from "@/libs/logto";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = await getLogtoContext();

  if (!isAuthenticated) redirect("/auth");

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col">
        Hello World!
        <ChangePass />
        <SignOut />
      </div>
    </main>
  );
}
