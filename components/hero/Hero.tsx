import { User } from "@prisma/client";

const Hero = ({ user }: { user: User }) => {
  return (
    <div className='flex flex-col items-start gap-2'>
      <h1 className='text-2xl font-bold'>現在のログイン名:{user.name}</h1>
      <h1 className='text-2xl font-bold'>現在のログインロール:{user.role}</h1>
      <h1 className='text-2xl font-bold'>現在のid:{user.id}</h1>
    </div>
  );
};

export default Hero;
