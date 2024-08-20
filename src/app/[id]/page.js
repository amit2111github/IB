'use client';
import Result from '@/components/Result';
import { notFound } from 'next/navigation';
import React from 'react';

function page({ params: { id } }) {
  const data = JSON.parse(window?.localStorage.getItem('workspace'));
  if (!data) notFound();
  const course = data?.find((course) => course.id == id);
  if (!course) notFound();
  return (
    <div className="w-[85%] m-auto">
      <Result data={course} />
    </div>
  );
}

export default page;
