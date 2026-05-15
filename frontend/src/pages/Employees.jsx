import { useCallback, useState, useEffect } from "react"
import { DEPARTMENTS, dummyEmployeeData } from "../assets/assets"
import { Plus, Search, X } from "lucide-react"
import EmployeeCard from "../components/EmployeeCard"
import EmployeeForm from "../components/EmployeeForm"

function Employees() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [selectedDept, setSelectedDept] = useState("")
  const [editEmployee, setEditEmployee] = useState(null)
  const [showCreateModal, setShowCreateModal] = useState(false)

  const fetchEmployees = useCallback(async () => {
    setLoading(true)
    setEmployees(dummyEmployeeData.filter((emp)=> !selectedDept || emp.department === selectedDept))
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, [selectedDept])

  useEffect(()=>{
    fetchEmployees()
  }, [fetchEmployees])

  const filtered = employees.filter((emp)=>`${emp.firstName} ${emp.lastName} ${emp.position}`.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="space-y-6">
      {/* Header Section */ }
      <div className="page-header flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="page-title">Employees</h1>
          <p className="page-subtitle">Manage your team members</p>
        </div>
        <button onClick={()=>setShowCreateModal(true)} className="btn-primary flex items-center gap-2">
          <Plus size={16} />
          Add Employee
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            className="pl-9"
            placeholder="Search employees..."
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
          />
        </div>
        <select className="w-full md:w-56" value = {selectedDept} onChange={(e)=> setSelectedDept(e.target.value)}>
          <option value="">All Departments</option>
          {DEPARTMENTS.map((dept)=>(
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>
      {/* employee cards */}
      {loading ? (
        <div className="flex justify-center p-12">
          <div className="animate-spin h-8 w-8 border-2 border-indigo-600 border-t-transparent rounded-full"/>
        </div>
      ) : (
        <div className="animate-fade-in">
          {filtered.length === 0 ? (
            <p className="text-sm text-slate-500">No employees found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((emp) => (
                <EmployeeCard key={emp.id} employee={emp}
                  onDelete={fetchEmployees} onEdit={(emp) => setEditEmployee(emp)} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Create Employee Modal */}
      {showCreateModal && (
        <div onClick={()=>setShowCreateModal(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"/>
          <div onClick={(e)=> e.stopPropagation()} className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl animate-slide-up flex flex-col max-h-[90vh]">
            <div className="flex items-start justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Add New Employee</h2>
                <p className="text-sm text-slate-500">Create a user account and employee profile</p>
              </div>
              <button onClick={()=>setShowCreateModal(false)} className="rounded-md p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">
                <X className="w-5 h-5"/>
              </button>
            </div>
            <div className="px-6 py-5 overflow-y-auto">
              <EmployeeForm
                onSuccess={() => {
                  setShowCreateModal(false);
                  fetchEmployees();
                }}
                onCancel={() => setShowCreateModal(false)}
              />
            </div>
          </div>

        </div>

      )}

      {/* Edit Employee Modal */}
      {editEmployee && (
        <div onClick={()=>setEditEmployee(null)} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"/>
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl animate-slide-up flex flex-col max-h-[90vh]">
            <div className="flex items-start justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Edit Employee</h2>
                <p className="text-sm text-slate-500">Update employee details</p>
              </div>
              <button onClick={()=>setEditEmployee(null)} className="rounded-md p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">
                <X className="w-5 h-5"/>
              </button>
            </div>
            <div className="px-6 py-5 overflow-y-auto">
              <EmployeeForm initialData={editEmployee} onSuccess={()=>{setEditEmployee(null);fetchEmployees();}}
                onCancel={()=> setEditEmployee(null)}/>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default Employees