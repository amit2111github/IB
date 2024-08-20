'use client';
import React, { useState, useEffect } from 'react';
import Preview from './Preview';

function MyCourse({ filter }) {
  const [showall, setShowAll] = useState(false);
  const [myCourse, setMyCourse] = useState([]);
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem('workspace')) || [];
    if (filter && filter != 'All') {
      data = data.filter((cur) => cur.courseType === filter);
    }
    setMyCourse(data);
  }, []);

  return (
    <div className="col-span-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
        {(showall ? myCourse : myCourse.slice(0, 2)).map((course, index) => {
          return (
            <div className="flex grow" key={index}>
              <Preview course={course} />
            </div>
          );
        })}
      </div>
      {myCourse && myCourse.length > 0 && (
        <div
          className="text-center text-[16px] mt-4 cursor-pointer text-[#7A8196]"
          onClick={(e) => setShowAll((old) => !old)}
        >
          {showall ? 'Collapse' : 'View all'}
        </div>
      )}
    </div>
  );
}

export default MyCourse;
