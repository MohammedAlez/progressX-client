import { Button } from "../../../components/ui/button";








export default function PreviousAttendance(){


    return (
        <div className='flex-1'>
            <h1 className='text-4xl md:text-4xl font-medium mb-10'>Previous attendance sessions</h1>
            <div className="flex justify-end my-8">
                <Button>Filter</Button>
            </div>
            <div className="flex gap-3 flex-col">
                {[1,2,3].map(e=>{
                    return (
                    <div key={e} className="rounded-xl p-4 bg-green-100 flex flex-col gap-4">
                        <h1 className='font-medium text-lg text-green-600'>Course Name</h1>
                        <div className="flex justify-between">
                            <span className="text-gray-700">20/12/2024 9:40-11-20</span>
                            <span className="font-bold">COUR</span>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}