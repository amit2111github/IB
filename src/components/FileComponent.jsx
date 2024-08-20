import React from 'react';

import Scorecard from './Scorecard';
import Upload from './Upload';
import MyCourse from './MyCourse';
import Explorecourse from './Explorecourse';

function FileComponent() {
  return (
    <div className="flex flex-col grid pt-[100px] gap-[40px]">
      <div className="grid grid-cols-12 gap-3 flex flex-col">
        <div className="col-span-12 md:col-span-8 grow">
          <h1 className="font-mont text-[28px] font-[800] w-full">
            Hey IB Folks ! Unsure about the quality of your answers?
            <span className="text-[#6947BF]"> We get you.</span>
          </h1>
          <Upload />
        </div>
        <div className="col-span-4 hidden md:block">
          <Scorecard />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <h2 className="font-[600] col-span-12 text-[#5B6170] text-[24px]">
          My coursework
        </h2>
        <MyCourse />
      </div>
      <div className="grid grid-cols-12">
        <Explorecourse />
      </div>
    </div>
  );
}

export default FileComponent;
