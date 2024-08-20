import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { fileStore, titleStore } from '@/store/file';

import { fileProcessing } from '@/lib/helper';

import { useRouter } from 'next/navigation';
import EvaluateButton from './EvaluateButton';
import { courses, subjects } from '@/lib/data';

function CourseData() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { title, subject, courseType, setData } = titleStore((state) => state);
  const { file, setFile } = fileStore((s) => s);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const id = await fileProcessing(file, courseType, title, subject);
    setLoading(false);
    router.push('/' + id);
    setFile(null);
    setData('title', '');
    setData('courseType', '');
    setData('subject', '');
  };
  const active = Boolean(title && subject && courseType && file);
  const buttonColor = active && !loading ? '[#6947BF]' : '[#ADB8C9]';
  return (
    <div className="mt-4">
      <p className="text-[#7A8196] text-[15px]">
        Select your course & subjects*
      </p>
      <div className="flex gap-4 mt-2 flex-wrap">
        <Select
          onValueChange={(e) => {
            setData('courseType', e);
            console.log(e, 'wsa');
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Coursework Type" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course, index) => (
              <SelectItem key={index} value={course}>
                {course}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(e) => setData('subject', e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject, index) => (
              <SelectItem value={subject} key={index}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-3">
        <p className="text-[#7A8196] text-[15px]">
          Enter your essay title*(Required)
        </p>
        <Input
          type="text"
          className="mt-2"
          value={title}
          onChange={(e) => setData('title', e.target.value)}
        />
      </div>
      <EvaluateButton
        color={buttonColor}
        handleSubmit={handleSubmit}
        disabled={!active || loading}
        loading={loading}
        buttonColor={buttonColor}
      />
    </div>
  );
}

export default CourseData;
