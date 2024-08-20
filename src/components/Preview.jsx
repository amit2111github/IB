import React from 'react';
import Badge from './Badge';
import Face from '@/../public/face.svg';
import Time from '@/../public/time.svg';
import Word from '@/../public/word.svg';
import Star from '@/../public/star.svg';
import English from '@/../public/english.svg';

import { Document, Page, pdfjs } from 'react-pdf';
import Link from 'next/link';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Preview({ course }) {
  return (
    <Link
      href={course.id}
      className="rounded-2xl shadow-xl border flex border p-[10px] bg-slate-100 grid grid-cols-12 gap-4"
    >
      <div className="rounded-xl h-[150px] overflow-hidden hidden col-span-4 lg:block bg-white pt-2 p-[20px]">
        <Document file={course.file}>
          <Page pageNumber={1} scale={0.3}></Page>
        </Document>
      </div>
      <div className="col-span-12 lg:col-span-8 p-[10px]">
        <h2 className="text-[#3D404B] font-[800] text-[18px] line-clamp-2">
          {course.title}
        </h2>
        <p className="line-clamp-2 text-[#7A8196] text-[14px]">
          {course.title}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge text={course.subject} img={Face} />
          <Badge text="18 min read" img={Time} />
          <Badge text="2388 words" img={Word} />
          <Badge text="7/7" img={Star} />
          <Badge text="English" img={English} />
        </div>
      </div>
    </Link>
  );
}

export default Preview;
