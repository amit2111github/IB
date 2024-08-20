'use client';
import React, { useState, useRef } from 'react';
import { FileUp } from 'lucide-react';
import CourseData from './CourseData';
import { fileStore } from '@/store/file';
import Image from 'next/image';
import UploadedImage from '@/../public/uploadedimage.svg';
import Check from '@/../public/check.svg';
import { useToast } from '@/components/ui/use-toast';

function Upload() {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const { file, setFile } = fileStore((state) => state);
  const inputRef = useRef(null);

  function handleChange(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileSizeInBytes = file.size;
      const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
      if (file.type != 'application/pdf') {
        toast({
          title: 'File should be pdf',
        });
      } else if (fileSizeInMB > 25) {
        toast({
          title: 'File size limit is 25 MB',
        });
      } else setFile(file);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    const fileSizeInBytes = file.size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
    if (file.type != 'application/pdf') {
      toast({
        title: 'File should be pdf',
      });
    } else if (fileSizeInMB > 25) {
      toast({
        title: 'File size limit is 25 MB',
      });
    } else setFile(file);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile() {
    setFile(null);
  }

  function openFileExplorer() {
    inputRef.current.value = '';
    inputRef.current.click();
  }

  return (
    <div
      className="border border-[#D6DFE4] rounded-3xl bg-gray-100 mt-4 p-6"
      tabIndex={0}
    >
      <form
        className={`${
          dragActive ? 'bg-blue-100' : 'bg-white'
        } rounded-lg min-h-[10rem] text-center flex flex-col items-center justify-center border-[2px] border-dashed p-4`}
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          onChange={handleChange}
          accept=".pdf"
        />

        {file ? (
          <div className="flex p-1 border rounded-xl gap-2 relative">
            <div
              className="absolute text-[#7A8196] text-[13px] right-[-10px] top-[-10px] rounded-[50%] border w-[20px] h-[20px] flex items-center pl-[5px] bg-white cursor-pointer"
              onClick={removeFile}
            >
              x
            </div>
            <div>
              <Image src={UploadedImage} alt="upload icon" />
            </div>
            <div className="flex gap-1">
              <Image src={Check} alt="check" />
              <div className="flex items-center">
                <p className="text-[#7A8196] text-[14px]">{file.name}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="text-gray-400">
              <FileUp size={50} strokeWidth={2.45} absoluteStrokeWidth />
            </div>
            <h2 className="mt-2 text-[#7A8196] font-[700] text-[15px]">
              Drag and drop a PDF
            </h2>
            <p className="text-[14px] text-[#7A8196] font-[400]">
              *Limit 25 MB per file.
            </p>
            <button
              className="mt-8 py-[8px] px-[12px] text-[15px] font-[800] text-[#6947BF] border border-[#CEC4EB] rounded-[20px] shadow-xl mb-8"
              onClick={openFileExplorer}
            >
              Upload your file
            </button>
          </>
        )}
      </form>
      <CourseData />
    </div>
  );
}

export default Upload;
