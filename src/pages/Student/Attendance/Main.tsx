import { Button } from "../../../components/ui/button";
import { CiCircleAlert } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";



export default function StudentAttendanceMain(){


    return (
        <div className='flex-1'>
            <h1 className='text-4xl md:text-4xl font-medium mb-10'>Attendance</h1>
            <div className="flex justify-end my-8">
                <Link to='/student/attendance/scan-qr'>
                    <Button>Scan Qr code</Button>
                </Link>
            </div>
            <div className="rounded-xl p-4 bg-yellow-100 mb-6">
                <h1 className="text-yellow-500 flex gap-2 font-medium">
                    <CiCircleAlert size={25} style={{color:'#eab308'}}/>
                    You are almost reach the allowed absence limit
                </h1>
            </div>
            {/* <div className="rounded-xl p-4 bg-red-100 mb-6">
                <h1 className="text-red-500 flex gap-2 font-medium">
                    <CiCircleAlert size={25} style={{color:'#ef4444'}}/>
                    You are almost reach the allowed absence limit
                </h1>
            </div> */}
            <div className="flex gap-4 flex-col sm:flex-row">
                <div className="rounded-xl flex-1 bg-green-100 p-4 flex flex-col gap-10">
                    <h1 className="font-medium text-2xl text-green-500">Total Attendance</h1>
                    <div className="flex justify-between items-end">
                        <span className="font-medium text-green-500">14/18</span>
                        <Link to='/student/attendance/main/previous-attendance' className="bg-white hover:opacity-80 w-12 h-12 flex justify-center items-center rounded-full">
                            <FaArrowRight size={30}/>
                        </Link>
                    </div>
                </div>
                <div className="rounded-xl flex-1 bg-red-100 p-4 flex flex-col gap-10">
                    <h1 className="font-medium text-2xl text-red-500">Total Attendance</h1>
                    <div className="flex justify-between items-end">
                        <span className="font-medium text-red-500">4/18</span>
                        <Link to='/student/attendance/main/previous-absence' className="bg-white hover:opacity-80 w-12 h-12 flex justify-center items-center rounded-full">
                            <FaArrowRight size={30}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}