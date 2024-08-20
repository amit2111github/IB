'use client';
import React, { useState } from 'react';
import Pdfcontroller from './Pdfcontroller';
import PdfRenderer2 from './PdfRenderer';
import Image from 'next/image';
import RightArrow from '@/../public/rightarrow.svg';
function FullPDF({ url, name, page }) {
  const [show, setShow] = useState(true);

  return show ? (
    <>
      <div className="rounded-t-2xl bg-gray-100">
        <div className="flex justify-between p-2 flex-wrap gap-2">
          <h1 className="bg-white text-[#3D404B] text-[15px] rounded-3xl px-3 py-1">
            {name}
          </h1>
          <Pdfcontroller setShow={setShow} />
        </div>
      </div>
      <PdfRenderer2 url={url} page={page} />
    </>
  ) : (
    <div className="bg-white flex rounded-2xl justify-between p-2">
      <h3 className="bg-gray-100 text-[#3D404B] text-[10px] md:text-[15px] rounded-3xl px-[10px] md:px-3 inline-flex items-center">
        {name}
      </h3>
      <div
        className="text-[#6947BF] text-[15px] flex font-bold cursor-pointer"
        onClick={(e) => setShow((old) => !old)}
      >
        <p>Expand & view your file</p>
        <div className="flex items-center">
          <Image src={RightArrow} alt="righ" />
        </div>
      </div>
    </div>
  );
}

export default FullPDF;
