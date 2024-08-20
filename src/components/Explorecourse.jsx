import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MyCourse from './MyCourse';
import { courses } from '@/lib/data';

function Explorecourse() {
  const tabs = ['All', ...courses];
  return (
    <div className="col-span-12 mb-6">
      <h2 className="font-[600] text-[#5B6170] text-[24px]">
        Explore coursework
      </h2>
      <Tabs defaultValue={tabs[0]}>
        <TabsList className="mt-3 w-full flex flex-wrap justify-start">
          {tabs.map((tabValue, index) => (
            <TabsTrigger
              className="text-[20px] rounded-2xl px-3"
              value={tabValue}
              key={index}
            >
              {tabValue}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tabValue, index) => (
          <TabsContent value={tabValue} key={index}>
            <MyCourse filter={tabValue} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default Explorecourse;
