import { useEffect, useState } from "react"

import { IoIosMenu } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import fakeAuth from "../auth";
import { GrHomeRounded } from "react-icons/gr";
import { FaAddressBook } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";


export default function SideBar(){

    const [open, setOpen] = useState(window.innerWidth>1024?true:false);
    const navigate = useNavigate()

    const location = useLocation()
    console.log(location)

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth>1024)
        }
        // Set up the event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    return(
        <div className="">
            <div className="">
                <button onClick={()=>setOpen(true)} className="lg:hidden bg-gray-200 w-8 h-8 flex justify-center items-center rounded-xl fixed top-4 right-4">
                    <IoIosMenu size={25}/>
                </button>
                {open && <div onClick={()=>setOpen(false)} className="lg:hidden bg-black w-full h-[100vh] opacity-40 fixed top-0 left-0"></div>}
                <div style={{transition:'0.3s',left:open?'0px':'-400px'}} className="w-[350px] lg:relative absolute top-0 bg-gray-100 rounded-xl h-full lg:h-[calc(100vh-32px)] p-4">
                    <div className="flex gap-3 items-center ">
                        <div className="">
                            <img src="" alt="" className="w-14 h-14 rounded-full bg-red-300" />
                        </div>
                        <div className="">
                            <h1 className="font-medium">Bouazza Mohammed alez</h1>
                            <h1 className="text-gray-600 font-medium text-sm">Computer Science</h1>
                        </div>

                    </div>
                    <div className=" h-[1px] rounded-xl bg-slate-300 my-5 w-[90%] mx-auto"></div>

                    <div className="flex flex-col justify-between h-[80%]">
                        {fakeAuth.role == 'student' &&
                            <div className="flex flex-col gap-3">
                                {/* <Link to='/student/home' className={`p-2 px-4 rounded-lg ${location.pathname=='/student/home' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300 font-medium flex gap-3 items-center`}><GrHomeRounded/> Home</Link> */}
                                <Link to='/student/profile/main' className={`p-2 px-4 rounded-lg ${location.pathname=='/student/profile/main' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300 font-medium flex gap-3 items-center`}><FaRegUser/> Profile</Link>
                                <Link to='/student/courses/main' className={`p-2 px-4 rounded-lg ${location.pathname=='/student/courses/main' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300 font-medium flex gap-3 items-center`}><FaAddressBook />Courses </Link>
                                <Link to='/student/attendance/main' className={`p-2 px-4 rounded-lg ${location.pathname=='/student/attendance/main' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300 font-medium flex gap-3 items-center`}><FaBookOpen />Attendance</Link>
                            </div>
                        }
                        {fakeAuth.role == 'instructor' &&
                            <div className="flex flex-col gap-3">
                                <Link to='/instructor/courses' className="p-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium">Courses</Link>
                                <Link to='/instructor/attendance' className="p-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium">Attendance</Link>
                            </div>
                        }
                        {fakeAuth.role == 'department' &&
                            <div className="flex flex-col gap-3">
                                <Link to='/department/home' className="p-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium">Home</Link>
                                <Link to='/department/courses' className="p-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium">Courses</Link>
                                <Link to='/department/attendance' className="p-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium">Attendance</Link>
                            </div>
                        }
                        <div className="">
                            <Button className="bg-red-600 w-full hover:bg-red-700" onClick={()=>fakeAuth.logout(()=>navigate(`/login`))}>Log out</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}