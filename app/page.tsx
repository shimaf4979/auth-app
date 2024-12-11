import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className='flex  justify-center '>
      <div className='flex flex-col items-center gap-2 justify-center'>
        <h1 className='text-2xl font-bold'>現在は[ ]でログインしています</h1>
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
