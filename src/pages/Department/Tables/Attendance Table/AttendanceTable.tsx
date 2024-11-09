import { columns, Students } from "./columns"
import { DataTable } from "./data-table"




export default function AttendanceTable() {
    const data = Students
   
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    )
  }