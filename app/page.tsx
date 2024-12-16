import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/nextauth";
import Hero from "@/components/hero/Hero";
const page = async () => {
  const user = await getAuthSession();
  console.log("user");
  console.log(user);

  return (
    <div className='flex  justify-center '>
      <div className='flex flex-col items-center gap-2 justify-center'>
        {user ? (
          <Hero user={user} />
        ) : (
          <h1 className='text-2xl font-bold'>ログインしていません</h1>
        )}
        <br />
        <Button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10'
          size='lg'
        >
          <Link href='/client'>お客さん</Link>
        </Button>
        <Button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          size='lg'
        >
          <Link href='/shop'>ショップ</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
