import React from 'react';
import Logo from '@/../public/logo.svg';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Home from '@/../public/Home.svg';
import Book from '@/../public/book.svg';
import Quiz from '@/../public/quiz.svg';
import File from '@/../public/file.svg';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="h-full py-2 px-[3px] fixed left-2 top-0 hidden md:block w-[68px]">
      <div className="bg-white h-full border-box flex flex-col justify-between rounded-2xl">
        <div className="pt-4 flex justify-center flex-col gap-3 px-2">
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-full" />
          </Link>

          <Image src={Home} alt="logo" className="w-[80%] m-auto mt-4" />
          <Image src={Book} alt="logo" className="w-[80%] m-auto" />
          <Image src={File} alt="logo" className="w-[80%] m-auto" />
          <Image src={Quiz} alt="logo" className="w-[80%] m-auto" />
        </div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/8416/2990/9d328622a520a4625d8a60c972b757f1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwD89hSZvs5OcOZN6t-8Y~62NF8mjyZDrXvL0M46qvFyFxqlb5UL1Y~SY79Afk1Qvtmm8Q~qwW4QV-1dSaLdxDFA8LhadrGs8kcv5J~f1lL4XN34qlYU6jQLWSEzadYuLYViQvxpkNSCA1LJMl9sR0ILyvKg9xHQ8tvQ~LodUbDHinKmJTD3inYmATqv0zuERqLZhtaOFE1ojJNeMzJIeGKAe-oDqM5lElvcSd8kZ8DnnlEZKeMogSkXGnKlAzF3buYgLHCbH1lY8TIAoUuXO8pyWYce5Dl-Ev1FSf2XTVLCMRCfEUakjgVli8Z3qjZGd4P2wfwTklpDZ9W~MQmo6Q__"
            width="80%"
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
}
export function SmallNavbar() {
  return (
    <div className="w-full fixed top-0 left-0 bg-white block md:hidden px-4 py-1 flex justify-between">
      <div className="flex items-center">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-full" />
        </Link>
      </div>

      <div className="flex items-center">
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
