import { useNavigate} from "react-router-dom"
import { useState } from "react"
import { DEPARTMENTS } from "../assets/assets"
import { Loader2Icon } from "lucide-react"

function EmployeeForm({initialData, onSuccess, onCancel}) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const isEditMode = Boolean(initialData)
    const handleSubmit = async (e)=>{
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-[820px] mx-auto space-y-6">
        {/* Personal Information */}
        <div className="card p-5 md:p-6">
            <h3 className="text-sm font-semibold text-slate-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-medium text-slate-600">First Name</label>
                    <input type="text" required defaultValue={initialData?.firstName}/>
                </div>
                <div>
                    <label className="text-xs font-medium text-slate-600">Last Name</label>
                    <input type="text" required defaultValue={initialData?.lastName}/>
                </div>
                <div>
                    <label className="text-xs font-medium text-slate-600">Phone Number</label>
                    <input type="text" required defaultValue={initialData?.phone}/>
                </div>
                <div>
                    <label className="text-xs font-medium text-slate-600">Join Date</label>
                    <input type="date" required defaultValue={initialData?.joinDate ? new Date(initialData.joinDate).toISOString().split('T')[0] : ''}/>
                </div>
                <div className="md:col-span-2">
                    <label className="text-xs font-medium text-slate-600">Bio (optional)</label>
                    <textarea rows={3} defaultValue={initialData?.bio} placeholder="Brief description"/>
                </div>
            </div>
        </div>

        {/* Employement Details */}
        <div className="card p-5 md:p-6">
            <h3 className="text-sm font-semibold text-slate-800 mb-4">Employment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-medium text-slate-600">Department</label>
                    <select name ="department" defaultValue={initialData?.department || ""}>
                        <option value="">Select Department</option>
                        {DEPARTMENTS.map((dept) => (
                            <option key={dept} value={dept}>
                                {dept}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-xs font-medium text-slate-600">Position</label>
                    <input type="text" name="position" required defaultValue={initialData?.position || ""}/>
                </div>
                <div>
                    <label className="text-xs font-medium text-slate-600">Basic Salary</label>
                    <input type="number" name="basicSalary" min="0" step="0.01" required defaultValue={initialData?.basicSalary || 0}/>
                </div>
                <div>
                    <label className="text-xs font-medium text-slate-600">Allowance</label>
                    <input type="number" name="allowance" min="0" step="0.01" required defaultValue={initialData?.allowance || 0}/>
                </div>
                <div>
                    <label className="text-xs font-medium text-slate-600">Deductions</label>
                    <input type="number" name="deductions" min="0" step="0.01" required defaultValue={initialData?.deductions || 0}/>
                </div>
                {isEditMode && (
                    <div>
                        <label className="text-xs font-medium text-slate-600">Status</label>
                        <select name="status" defaultValue={initialData?.employementStatus || ""}>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                )}
            </div>
        </div>

        {/* Account Setup*/}
        <div className="card p-5 md:p-6">
            <h3 className="text-sm font-semibold text-slate-800 mb-4">Account Setup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-medium text-slate-600">Work Email</label>
                    <input type="email" required defaultValue={initialData?.email}/>
                </div>
                {!isEditMode && (
                    <div>
                        <label className="text-xs font-medium text-slate-600">Temporary Password</label>
                        <input type="password" required/>
                    </div>
                )}
                {isEditMode && (
                    <div>
                        <label className="text-xs font-medium text-slate-600">Change Password (Optional)</label>
                        <input type="password" placeholder="Leave blank to keep current password"/>
                    </div>
                )}
                <div>
                    <label className="text-xs font-medium text-slate-600">System Role</label>
                    <select name="role" required defaultValue={initialData?.user?.role || 'EMPLOYEE'}>
                        <option value="EMPLOYEE">Employee</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
            </div>
        </div>


        {/* Buttons */}
        <div className="flex items-center justify-end gap-3">
            <button type="button" onClick={()=>(onCancel ? onCancel() : navigate(-1))} className="btn-secondary">
                Cancel
            </button>
            <button type="submit" disabled={loading} className="btn-primary flex items-center gap-2">
                {loading && <Loader2Icon className="w-4 h-4 animate-spin"/>}
                {isEditMode ? "Update Employee" : "Create Employee"}
            </button>
        </div>

    </form>
  )
}

export default EmployeeForm