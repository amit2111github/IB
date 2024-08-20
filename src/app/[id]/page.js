import dynamic from 'next/dynamic';
const Result = dynamic(() => import('@/components/Result'), {
  ssr: false,
});
import React from 'react';

function page({ params: { id } }) {
  return (
    <div className="w-[85%] m-auto">
      <Result id={id} />
    </div>
  );
}

export default page;
