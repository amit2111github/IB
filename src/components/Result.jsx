'use client';
import React, { useState, useEffect } from 'react';
import Evaluation from './Evaluation';
import FullPDF from './FullPDF';

import Confetti from 'react-confetti';
import { useRouter } from 'next/navigation';

function Result({ id }) {
  const router = useRouter();
  let data = JSON.parse(window?.localStorage.getItem('workspace'));
  data = data?.find((course) => course.id == id);
  if (!data) {
    router.push('/');
    return;
  }
  return (
    <div className="pt-[100px] grid grid-cols-12 gap-3">
      <Confetti
        numberOfPieces={500}
        width={window.innerWidth}
        recycle={false}
        height={window.innerHeight}
      />
      <div className="col-span-12 lg:col-span-7">
        <FullPDF url={data.file} name={data.name} page={data.page} />
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-2">
        <Evaluation data={data.result} />
      </div>
    </div>
  );
}

export default Result;
