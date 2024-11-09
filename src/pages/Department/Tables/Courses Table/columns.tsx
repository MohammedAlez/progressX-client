import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu"
import { Button } from "../../../../components/ui/button"

export type Course = {
    id: string
    course: string,
    instructor:string,
    group: string,
    percentage: number
  }
  
  export const Students: Course[] = [
    {
      id: "234",
      course: "DSA",
      instructor:"SomeOne",
      group: "A4",
      percentage: 59
    },
    {
      id: "234",
      course: "DSA",
      instructor:"SomeOne",
      group: "A4",
      percentage: 59
    },
    
  ]


  export const columns: ColumnDef<Course>[] = [
    {
      accessorKey: "id",
      header: "#ID",
    },
    {
      accessorKey: "course",
      header: "Course",
    },
    {
      accessorKey: "instructor",
      header: "Instructor",
    },
    {
      accessorKey: "group",
      header: "Group",
    },
    {
        accessorKey: "percentage",
        header: "Percentage",
        cell: ({ row }) => {
          
            const status = row.getValue('status')
     
          return (
            <div className="flex  font-medium text-green-500">
                70/100
            </div>
          )
        },
      },
  ]


  