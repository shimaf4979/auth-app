import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// サインアップページ
const SignupPage = async () => {
  // 認証情報取得
  const user = await getAuthSession();

  if (user) {
    redirect("/");
  }

  return (
    <div className='flex flex-col items-center gap-5  h-screen'>
      <div className='text-2xl font-bold text-center '>新規登録</div>
      <Link href='/signup/client'>
        <Button variant='outline' size='lg' className='w-full p-10'>
          お客さんとして登録
        </Button>
      </Link>
      <Link href='/signup/shop'>
        <Button variant='outline' size='lg' className='w-full p-10'>
          店舗として登録
        </Button>
      </Link>
    </div>
  );
};

export default SignupPage;
