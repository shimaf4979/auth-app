import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";

const ClientPage = async () => {
  const user = await getAuthSession();
  if (!user) {
    redirect("/login");
  }
  if (user.role !== "client") {
    redirect("/login");
  }
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='text-2xl font-bold'>ClientPage</h1>
      <h1>むっちゃ大事な情報</h1>
      <h1>↓↓↓</h1>
      <h1>タコの心臓は3つある!!!</h1>
    </div>
  );
};

export default ClientPage;
