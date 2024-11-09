import { Link } from "react-router-dom";





export default function InstructorCoursesMain(){

    return (
        <div className='flex-1'>
            <h1 className='text-4xl md:text-4xl font-medium mb-10'>Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[1,2,3].map((e)=>(
                        <Link to='/instructor/courses/course-name' key={e} className="hover:opacity-80 rounded-xl p-4 gap-2 flex flex-col justify-between bg-slate-100">
                            <div className="font-medium text-lg">Data Structures & Algorithmes</div>
                            <div className="flex justify-between">
                                <span className="block font-medium text-gray-700">3 Groups</span>
                                <span className="block text-green-500 font-bold">73/100</span>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}