"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { User } from "@prisma/client";

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
