import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";
import Signup from "@/components/auth/Signup";

// サインアップページ
const SignupPage = async ({ params }: { params: { role: string } }) => {
  // 認証情報取得
  const user = await getAuthSession();

  if (user) {
    redirect("/");
  }

  return <Signup role={params.role as "client" | "shop"} />;
};

export default SignupPage;
