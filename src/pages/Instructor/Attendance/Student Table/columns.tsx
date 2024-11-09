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

export type Student = {
    id: string
    fullName: string,
    date:string,
    status: boolean
  }
  
  export const Students: Student[] = [
    {
      id: "728ed52f",
      fullName: 'SomeOne',
      date:'12/04/2024',
      status: true,
    },
    {
      id: "728ed52f",
      fullName: 'SomeOne',
      date:'12/04/2024',
      status: false,
    },
  ]


  export const columns: ColumnDef<Student>[] = [
    {
      accessorKey: "id",
      header: "#ID",
    },
    {
      accessorKey: "fullName",
      header: "Full Name",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const attendanceStatus = row.getValue("status")
        
   
        return <div className="font-medium">
            {attendanceStatus 
                ?
                <span className="text-green-500">Present</span>   
                : 
                <span className="text-red-500">Absence</span>   
            }
        </div>
      },
    },
    {
        id: "actions",
        cell: ({ row }) => {
          
            const status = row.getValue('status')
     
          return (
            <div className="flex justify-center">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    {status 
                    ? 
                        <DropdownMenuItem
                        
                        >
                            Mark as absence
                        </DropdownMenuItem>
                    :
                    <DropdownMenuItem
                        
                        >
                        Mark as presnet
                    </DropdownMenuItem>}
                    <DropdownMenuSeparator />
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
          )
        },
      },
  ]


  