import { CiCircleAlert } from "react-icons/ci";
import { Button } from "../../../components/ui/button";

import { FaFilePdf } from "react-icons/fa6";








export default function CourseDetails(){

    return (
        <div className='flex-1'>
            <h1 className='text-4xl md:text-4xl font-medium mb-10'>Course Details</h1>
            <h2 className="text-2xl font-medium mb-10">Algorithmes & Data Structures</h2>
            <div className="flex gap-3 justify-center mb-10">
                <Button className="flex-1 text-black bg-gray-300 hover:bg-gray-300 shadow-none">COUR</Button>
                <Button className="flex-1 bg-gray-100 text-black hover:bg-gray-300 shadow-none">TP</Button>
                <Button className="flex-1 bg-gray-100 text-black hover:bg-gray-300 shadow-none">TD</Button>
            </div>
            <div className="flex justify-between mb-6">
                <h3 className="text-xl font-medium ">Files</h3>
                <Button>Add file</Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[1,2,3,4,5,6,7,8].map(e=>(
                        <div key={e} className="bg-red-200 hover:bg-red-300 w-full h-20 rounded-xl flex justify-center items-center">
                            <FaFilePdf size={30} style={{color:'red'}}/>
                        </div>
                ))}
            </div>
            <div className="flex justify-between my-6">
                <h3 className="text-xl font-medium ">Course Progress</h3>
                <Button>Update</Button>
            </div>
            <div className="">
                <span className="text-green-500 font-medium block mb-1">70/100</span>
                <span className="w-full block rounded-xl h-3 bg-gray-100 relative">
                    <span className="absolute top-0 left-0 rounded-xl h-full w-[80%] bg-green-500"></span>
                </span>
                <div className="rounded-xl p-4 bg-yellow-100 my-6">
                    <h1 className="text-yellow-500 flex gap-2 font-medium">
                        <CiCircleAlert size={25} style={{color:'#eab308'}}/>
                        The course Stopped on the Chapter N1
                    </h1>
                </div>
            </div>
        </div>
    )
}