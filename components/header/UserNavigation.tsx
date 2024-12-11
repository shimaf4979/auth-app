"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

interface UserNavigationProps {
  user: User;
}

// ユーザーナビゲーション
const UserNavigation = ({ user }: UserNavigationProps) => {
  return (
    <div className='flex-col container w-full mx-auto flex max-w-screen-md items-center justify-center'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className='relative w-10 h-10 flex-shrink-0'>
            <Image
              src={user.image || "/default.png"}
              className='rounded-full object-cover'
              alt={user.name || "avatar"}
              fill
            />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='bg-white p-2 w-[300px]' align='center'>
          <Link href={`/user/${user.id}`}>
            <DropdownMenuItem className='cursor-pointer'>
              <div className='break-words min-w-0'>
                <div className='mb-2'>{user.name || ""}</div>
                <div className='text-gray-500'>{user.email || ""}</div>
              </div>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />

          <Link href='/settings/profile'>
            <DropdownMenuItem className='cursor-pointer'>
              アカウント設定
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem
            onSelect={async (event) => {
              event.preventDefault();
              await signOut({ callbackUrl: "/" });
            }}
            className='text-red-600 cursor-pointer'
          >
            ログアウト
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNavigation;
