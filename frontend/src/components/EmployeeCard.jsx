import { PencilIcon, Trash2Icon } from "lucide-react"

function EmployeeCard({employee, onDelete, onEdit}) {
    const handleDelete = async () => {
      if(!confirm(`Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`)) 
        return;
    }
  return (
    <div className="card card-hover p-4 relative overflow-hidden group">
        <div className="flex items-start justify-between">
          <span className="badge bg-slate-100 text-slate-600">{employee.department || "Remote"}</span>
          {employee.isDeleted && <span className="badge badge-danger">Deleted</span>}
        </div>

        {!employee.isDeleted && (
          <div className="absolute right-3 top-3 flex gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
            <button onClick={() => onEdit(employee)} className="p-2 rounded-md border border-slate-200 bg-white shadow-sm text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-colors">
              <PencilIcon className="h-4 w-4"/>
            </button>
            <button onClick={handleDelete} className="p-2 rounded-md border border-slate-200 bg-white shadow-sm text-slate-500 hover:text-rose-600 hover:border-rose-200 transition-colors">
              <Trash2Icon className="h-4 w-4"/>
            </button>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center">
          <div className="h-20 w-20 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-semibold">
            {employee.firstName[0]} {employee.lastName[0]}
          </div>
        </div>

        <div className="mt-4 text-center">
            <h3 className="text-base font-semibold text-slate-900">{employee.firstName} {employee.lastName}</h3>
            <p className="text-sm text-slate-500">{employee.position}</p>
        </div>
    </div>
  )
}

export default EmployeeCard