import Image from 'next/image';
import React from 'react';

function Badge({ text, img }) {
  return (
    <div className="bg-white px-2 py-1 text-[#5B6170] text-[14px] font-[800] rounded-3xl flex gap-1">
      <div className="flex items-center">
        <Image src={img} alt="some" className="w-6" />
      </div>
      <div className="flex items-center">{text}</div>
    </div>
  );
}

export default Badge;
