import { ArrowRightIcon, CalendarIcon, DollarSignIcon, FileTextIcon } from "lucide-react";
import { Link } from "react-router-dom";

function EmployeeDashboard({data}) {
    const emp = data.employee;
    const cards = [
        {
            icon: CalendarIcon,
            value: data.currentMonthAttendance,
            title: "Days Present",
            subtitle: "This month"
        },
        {
            icon: FileTextIcon,
            value: data.pendingLeaves,
            title: "Pending Leaves",
            subtitle: "Needs approval"
        },
        {
            icon: DollarSignIcon,
            value: data.latestPayslip ? `$${data.latestPayslip.netSalary?.toLocaleString()}` : "N/A",
            title: "Latest Payslip",
            subtitle: "Most recent payout"
        }
    ]
  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-semibold text-slate-900">Welcome, {emp?.firstName}! {emp?.lastName}</h1>
            <p className="mt-1 text-sm text-slate-500">{emp?.position} - {emp?.department || "No Department"}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card)=>(
                <div
                    key={card.title}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-1.5 rounded-full bg-slate-300/80 transition group-hover:bg-indigo-400" />
                        <div>
                            <p className="text-sm font-medium text-slate-600">{card.title}</p>
                            <p className="mt-1 text-2xl font-semibold text-slate-900">{card.value}</p>
                        </div>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">
                        <card.icon className="h-5 w-5" />
                    </div>
                </div>
            ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
            <Link to="/attendance" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500">
                Mark Attendance <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link to="/leave" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                Apply for Leave
            </Link>
        </div>
    </div>
    
  )
}

export default EmployeeDashboard