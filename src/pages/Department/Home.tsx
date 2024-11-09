
export default function Home(){


    return (
        <div className='flex-1'>
            <h1 className='text-4xl md:text-4xl font-medium mb-10'>Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-xl p-4 bg-green-100">
                    <h1 className="font-medium mb-3 text-lg">Total Courses</h1>
                    <span className="">120</span>
                </div>
                <div className="rounded-xl p-4 bg-purple-100">
                    <h1 className="font-medium mb-3 text-lg">Total Groups</h1>
                    <span className="">120</span>
                </div>
                <div className="rounded-xl p-4 bg-gray-100">
                    <h1 className="font-medium mb-3 text-lg">Average Attendance</h1>
                    <span className="">80/100</span>
                </div>
                <div className="rounded-xl p-4 bg-gray-100">
                    <h1 className="font-medium mb-3 text-lg">Course Progress</h1>
                    <span className="">80/100</span>
                </div>
            </div>
        </div>
    )

}



 