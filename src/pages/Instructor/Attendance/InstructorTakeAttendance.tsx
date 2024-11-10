import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import StudentsTable from "./Student Table/StudentsTable";


import {
    Dialog,
    DialogContent,
    // DialogDescription,
    DialogHeader,
    // DialogTitle,
    DialogTrigger,
  } from "../../../components/ui/dialog"
  








export default function InstructorTakeAttendance(){

    return (
        <div className='flex-1'>
            <h1 className='text-4xl md:text-4xl font-medium mb-10'>Attendance</h1>
            <div className="flex justify-between">
                <h2 className="text-2xl font-medium mb-10">Algorithmes & Data Structures</h2>
                <h2 className="text-2xl font-medium mb-10">Group 3</h2>
            </div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-medium mb-10">Students List</h2>
                <div className="flex gap-3 items-start">
                    <Dialog>
                        <DialogTrigger>
                            <Button>Show Qr Code</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <div className="w-48 h-48 bg-black mx-auto my-8"></div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    <Link to='/instructor/attendance/group/take-attendance'>
                        <Button className=''>Save</Button>
                    </Link>
                </div>
            </div>
            <StudentsTable />
        </div>
    )
}
