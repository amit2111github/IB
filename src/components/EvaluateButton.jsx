import React, { useState } from 'react';
import Shine from '@/../public/shine.svg';
import Image from 'next/image';
function EvaluateButton({ disabled, handleSubmit, buttonColor, loading }) {
  const [error, setError] = useState(false);
  const handleClick = (e) => {
    setError(false);
    setTimeout(() => {
      setError(false);
    }, 1000);

    if (disabled) {
      setError(true);
    } else {
      handleSubmit(e);
    }
  };
  return buttonColor === '[#6947BF]' ? (
    <div className="mt-8">
      <button
        onClick={handleClick}
        className={`bg-[#6947BF] py-[8px] px-[10px] text-white rounded-3xl font-bold text-[18px] md:text-[21px] flex gap-2 items-center justify-start ${
          error ? 'border border-red-500' : ''
        }`}
      >
        <Image src={Shine} alt="Shine" />

        <p>{!loading ? 'Evaluate your Score' : 'Processing'}</p>
      </button>
    </div>
  ) : (
    <div className="mt-8">
      <button
        onClick={handleClick}
        className={`bg-[#ADB8C9] py-[8px] px-[10px] text-white rounded-3xl font-bold text-[18px] md:text-[21px] flex gap-2 items-center justify-start ${
          error ? 'border border-red-500' : ''
        }`}
      >
        <Image src={Shine} alt="Shine" />
        <p>{!loading ? 'Evaluate your Score' : 'Processing'}</p>
      </button>
    </div>
  );
}

export default EvaluateButton;
