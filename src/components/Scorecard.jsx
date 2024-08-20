import React from 'react';
import Scoreimage from '@/../public/scorecard.svg';
import Image from 'next/image';

function Scorecard() {
  return (
    <div className="h-full relative">
      <Image
        src={Scoreimage}
        alt="image"
        className="h-auto absolute bottom-0"
      />
    </div>
  );
}

export default Scorecard;
