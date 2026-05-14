import { Building2Icon, CalendarIcon, FileTextIcon, UserIcon } from 'lucide-react'

function AdminDashboard({ data }) {
    const stats = [
        {
            icon: UserIcon,
            value: data.totalEmployees,
            label: "Total Employees",
            description: "Active Workforce"
        },
        {
            icon: Building2Icon,
            value: data.totalDepartments,
            label: "Departments",
            description: "Total Departments"
        },
        {
            icon: CalendarIcon,
            value: data.todayAttendance,
            label: "Today's Attendance",
            description: "Attendace of Today"
        },
        {
            icon: FileTextIcon,
            value: data.pendingLeaves,
            label: "Pending Leaves",
            description: "Awaiting approval"
        }
        
    ]
  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">Welcome back, Admin — here's your overview</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat)=>(
                <div
                    key={stat.label}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-1.5 rounded-full bg-slate-300/80 transition group-hover:bg-indigo-400" />
                        <div>
                            <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                            <p className="mt-1 text-2xl font-semibold text-slate-900">{stat.value}</p>
                        </div>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">
                        <stat.icon className="h-5 w-5" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AdminDashboard