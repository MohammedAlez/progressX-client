import { Link } from "react-router-dom"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../components/ui/select"
import { Button } from "../../../components/ui/button"




export default function InstructorAttendanceMain(){

    return (
        <div className='flex-1'>
            <h1 className='text-4xl md:text-4xl font-medium mb-10'>Attendance</h1>
            <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex-1">
                    <h1 className="font-medium mb-2">Course Name</h1>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="dsa">Algorithmes & DS</SelectItem>
                            <SelectItem value="oop">OOP</SelectItem>
                            <SelectItem value="aljebra">Algebra</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex-1">
                    <h1 className="font-medium mb-2">Group</h1>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Group" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="g-1">Group 1</SelectItem>
                            <SelectItem value="g-2">Group 2</SelectItem>
                            <SelectItem value="g-3">Group 3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex  justify-end my-6">
                <Link to='/instructor/attendance/group'>
                    <Button>Next</Button>
                </Link>
            </div>
        </div>
    )
}