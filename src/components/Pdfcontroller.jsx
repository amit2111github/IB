import React from 'react';
import Image from 'next/image';

import Zoomout from '@/../public/zoom_out.svg';
import Zoomin from '@/../public/zoom_in.svg';
import Collapse from '@/../public/collapse_content.svg';
import FullScreen from '@/../public/FullScreen.svg';
import { fullScreenMode, scaleStore } from '@/store/file';

function Pdfcontroller({ setShow }) {
  const { scale, setScale } = scaleStore((state) => state);
  const setFullScreen = fullScreenMode((state) => state.setFullScreen);
  return (
    <div className="flex justify-between lg:w-auto w-full">
      <div className="flex gap-2">
        <div
          className="flex items-center cursor-pointer"
          onClick={(e) => setScale(-0.1)}
        >
          <Image src={Zoomout} alt="zoomout" />
        </div>
        <div className="flex items-center text-[#5B6170] text-[14px]">
          {Math.floor(scale * 100)} %
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={(e) => setScale(0.1)}
        >
          <Image src={Zoomin} alt="zoomin" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center">
          <div
            className="bg-white text-[#3D404B] text-[15px] rounded-[50%] cursor-pointer"
            onClick={setFullScreen}
          >
            <Image src={FullScreen} alt="full screen" />
          </div>
        </div>
        <div className="flex items-center">
          <div
            className="bg-white text-[#3D404B] text-[15px] rounded-xl flex gap-2 px-1 cursor-pointer"
            onClick={(e) => setShow((old) => !old)}
          >
            <Image src={Collapse} alt="collapse" />
            <p>Collapse</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdfcontroller;
