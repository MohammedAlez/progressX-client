import { CiCircleAlert } from "react-icons/ci";
import CoursesTable from "./Tables/Courses Table/CoursesTable";
import { Button } from "../../components/ui/button";




export default function CoursesProgress(){



    return (
        <div className='flex-1'>
            <h1 className='text-4xl md:text-4xl font-medium mb-10'>Courses Progress</h1>
            <div className="">
                <h2 className="font-medium text-lg mb-2">Total courses progress rate</h2>
                <span className="text-green-500 font-medium block mb-1">70/100</span>
                <span className="w-full block rounded-xl h-3 bg-gray-100 relative">
                    <span className="absolute top-0 left-0 rounded-xl h-full w-[80%] bg-green-500"></span>
                </span>
            </div>
            <div className="mt-10 flex justify-end">
                <Button>Filter</Button>
            </div>
            <CoursesTable />
        </div>
    )
    
}