import React from 'react';
import { Calendar } from 'lucide-react';
import Note from '@/../public/note_stack.svg';
import Image from 'next/image';
import Fire from '@/../public/fire.svg';
import Coin from '@/../public/coin.svg';
function Navscore() {
  return (
    <div className="fixed top-0 right-0 w-[86px] px-[12px] py-2 text-[#5B6170] flex flex-col gap-[10px] justify-end">
      <div className="p-1 text-center flex gap-1 justify-center rounded-3xl bg-white text-xl font-[800]">
        <div className="inline-flex items-center justify-center">
          <Image src={Coin} alt="fire" width={100} />
        </div>
        <div className="flex items-center justify-center text-[16px]">120</div>
      </div>
      <div className="py-1 px-2 text-center flex gap-1 justify-center rounded-3xl bg-white text-xl font-[800]">
        <div className="inline-flex items-center justify-center">
          <Image src={Fire} alt="fire" className="w-[40px]" />
        </div>
        <div className="flex items-center justify-center text-[16px]">24</div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-[50%] p-[6px] bg-white">
          <div className="flex shadow-xl justify-center p-[6px] rounded-[50%] border bg-white text-xl font-[800]">
            <Calendar size={22} />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-[50%] p-[6px] bg-white">
          <div className="flex border border-gray-300 shadow-xl justify-center p-[6px] rounded-[50%] border bg-white text-xl font-[800]">
            <Image src={Note} alt="note-stack" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navscore;
