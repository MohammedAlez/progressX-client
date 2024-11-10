// src/pages/Student/Profile/Main.jsx
// import React from 'react';

function StudentCoursesMain() {
  return (
    <div className='flex-1'>
        <h1 className='text-4xl md:text-4xl font-medium mb-10'>Courses</h1>
        <div className="flex flex-col gap-2">
            {[1,2,3,4].map((e)=>(
                    <div key={e} className="rounded-xl p-4 gap-2 flex flex-col justify-between bg-slate-100">
                        <div className="font-medium text-lg">Course Name</div>
                        <div className="flex justify-between">
                            <span className="block font-medium text-gray-700">Instructor Name</span>
                            <span className="block text-green-500 font-bold">73/100</span>
                        </div>
                    </div>
                )
            )}
        </div>
    </div>
  );
}

export default StudentCoursesMain;
