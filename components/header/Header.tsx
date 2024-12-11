"use client";

import { Button } from "@/components/ui/button";
import UserNavigation from "@/components/header/UserNavigation";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

interface NavigationProps {
  user: User | null;
}
// ナビゲーション
const Navigation = ({ user }: NavigationProps) => {
  return (
    <header className='shadow-lg shadow-gray-100 mb-10'>
      <div className='container mx-auto flex max-w-screen-md items-center justify-center px-2 py-3'>
        <Link href='/' className='cursor-pointer text-xl font-bold'>
          Authentication
        </Link>
      </div>
      <div className='container mx-auto flex max-w-screen-md items-center justify-center px-2 py-3'>
        {user ? (
          <UserNavigation user={user} />
        ) : (
          <div className='flex items-center space-x-1'>
            <Button asChild variant='ghost' className='font-bold'>
              <Link href='/login'>ログイン</Link>
            </Button>
            <Button asChild variant='default' className='font-bold'>
              <Link href='/signup'>新規登録</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
