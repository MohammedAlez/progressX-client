import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import StudentsTable from "./Student Table/StudentsTable";









export default function InstructorAttendanceDetails(){

    return (
        <div className='flex-1'>
            <h1 className='text-4xl md:text-4xl font-medium mb-10'>Attendance</h1>
            <div className="flex justify-between">
                <h2 className="text-2xl font-medium mb-10">Algorithmes & Data Structures</h2>
                <h2 className="text-2xl font-medium mb-10">Group 3</h2>
            </div>
            <div className="flex gap-3 justify-center mb-10">
                <Button className="flex-1 text-black bg-gray-300 hover:bg-gray-300 shadow-none">COUR</Button>
                <Button className="flex-1 bg-gray-100 text-black hover:bg-gray-300 shadow-none">TP</Button>
                <Button className="flex-1 bg-gray-100 text-black hover:bg-gray-300 shadow-none">TD</Button>
            </div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-medium mb-10">Students List</h2>
                <div className="flex gap-3">
                    <Button className=''>Filter</Button>
                    <Link to='/instructor/attendance/group/take-attendance'>
                        <Button className=''>Take Attendance</Button>
                    </Link>
                </div>
            </div>
            <StudentsTable />
        </div>
    )
}
