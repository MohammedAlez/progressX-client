import React from 'react';
import { useAuth } from '../../../Context/Auth';

function StudentProfileMain() {

  const {user} = useAuth()

  console.log(user);

  return (
    <div className='flex-1'>
        <h1 className='text-4xl md:text-4xl font-medium mb-10'>Profile</h1>
        <div className="">
            <img src="" alt="" className="w-36 h-36 rounded-full bg-red-400 mx-auto" />
        </div>
        <h3 className="font-medium  text-lg text-center my-4">{user.username}</h3>
        <div className="p-6 rounded-xl bg-gray-100 w-full mb-3">
            <h3 className=""><span className="font-medium mb-2 text-lg">Birth Date: </span>14-05-2003</h3>
            <h3 className=""><span className="font-medium mb-2 text-lg">Birth Place: </span>Ouargla-ouargla</h3>
        </div>
        <div className="p-6 rounded-xl bg-gray-100 w-full">
            <h3 className=""><span className="font-medium mb-2 text-lg">University: </span>KASDI Merbah ouargla</h3>
            <h3 className=""><span className="font-medium mb-2 text-lg">Major: </span>Computer Science</h3>
            <h3 className=""><span className="font-medium mb-2 text-lg">Year: </span>4th year</h3>
        </div>
    </div>
  );
}

export default StudentProfileMain;
