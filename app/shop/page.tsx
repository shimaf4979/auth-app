import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";

const ShopPage = async () => {
  const user = await getAuthSession();
  if (!user) {
    redirect("/login");
  }
  if (user.role !== "shop") {
    redirect("/login");
  }
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='text-2xl font-bold'>ShopPage</h1>
      <h1>むっちゃ大事な情報</h1>
      <h1>↓↓↓</h1>
      <h1>シロクマの皮膚は黒い!!!</h1>
    </div>
  );
};

export default ShopPage;
