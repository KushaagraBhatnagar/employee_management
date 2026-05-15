import { useEffect, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { dummyProfileData } from '../assets/assets'
import {
    CalendarIcon,
    ChevronRightIcon,
    DollarSignIcon,
    FileTextIcon,
    LayoutGridIcon,
    LogOutIcon,
    MenuIcon,
    SettingsIcon,
    UserIcon,
    XIcon
} from 'lucide-react'
function Sidebar() {
    const {pathname} = useLocation()
    const [userName, setUserName] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(()=>{
        setUserName(dummyProfileData.firstName + ' ' + dummyProfileData.lastName)
    }, [])

    const role = "ADMIN" || "EMPLOYEE"
    const navItems = [
        {name: "Dashboard", path: "/dashboard", icon:LayoutGridIcon},
        role === "ADMIN" ?
        {name: "Employees", path: "/employees", icon:UserIcon} :
        {name: "Attendance", path: "/attendance", icon:CalendarIcon},
        {name: "Leave", path: "/leave", icon:FileTextIcon},
        {name: "Payslips", path: "/payslips", icon:DollarSignIcon},
        {name: "Settings", path: "/settings", icon:SettingsIcon}
    ]

    const handleLogout = () => {
        return <Navigate to="/login" />
    }

    useEffect(()=>{
        setMobileOpen(false)
    }, [pathname])

    const sidebarContent = (
        <div className='flex h-full flex-col'>
            {/* Brand Header */}
            <div className='border-b border-slate-800/80 px-5 py-5'>
                <div className='flex items-center justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                        <div className='flex size-9 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-400/20'>
                            <UserIcon className='text-white size-5' />
                        </div>
                        <div className='leading-tight'>
                            <p className='text-sm font-semibold text-white'>Employee MS</p>
                            <p className='text-xs text-slate-300'>Management System</p>
                        </div>
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={()=>setMobileOpen(false)} className='lg:hidden rounded-md p-1 text-slate-200 hover:bg-slate-800'>
                        <XIcon size={20} />
                    </button>
                </div>
            </div>
            {/* User Info */}
            <div className='px-5 py-4'>
                <div className='rounded-xl bg-slate-800/60 p-3 ring-1 ring-slate-700/60'>
                    <div className='flex items-center gap-3'>
                        <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-sm font-semibold text-white'>
                            <span>{userName.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className='min-w-0'>
                            <p className='truncate text-sm font-medium text-white'>{userName}</p>
                            <p className='text-xs text-slate-300'>{role === "ADMIN" ? "Administrator" : "Employee"}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation */}
            <div className='px-3'>
                <p className='px-3 pb-2 text-xs font-semibold tracking-[0.2em] text-slate-500'>NAVIGATION</p>
                {navItems.map((item)=>{
                    const isActive = pathname.startsWith(item.path)
                    return(
                        <Link key={item.path} to={item.path} className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-indigo-500/10 text-white" : "text-slate-300 hover:bg-slate-800/70 hover:text-white"}`}>
                            <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${isActive ? "bg-indigo-500/20" : "bg-slate-800/60"}`}>
                                <item.icon className={`w-[17px] h-[17px] shrink-0 ${isActive ? "text-indigo-300" : "text-slate-400 group-hover:text-slate-200"}`} />
                            </span>
                            <span className='flex-1'>{item.name}</span>
                            {isActive && <ChevronRightIcon className='w-3.5 h-3.5 text-indigo-400/70'/>}
                        </Link>
                    )
                })}
            </div>
            {/* Logout */}
            <div className='mt-auto px-5 pb-6'>
                <button onClick={handleLogout} className='flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800/70 hover:text-white'>
                    <LogOutIcon className='h-4 w-4' />
                    <span>Log out</span>
                </button>
            </div>
        </div>
    )

  return (
    <>
        {/* Mobile hamburger button */}
        <button onClick={()=>setMobileOpen(true)} className='lg:hidden rounded-md border border-slate-200 bg-white p-2 text-slate-700 shadow-sm'>
            <MenuIcon size={20} />
        </button>

        {/* Mobile Overlay */}
        {mobileOpen && <div onClick={()=>setMobileOpen(false)} className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'></div>} 
        
        {/* Sidebar - desktop */}
        <aside className='hidden lg:flex w-72 flex-col bg-slate-900 text-white'>
            {sidebarContent}
        </aside>

        {/* Sidebar - mobile */}
        <aside className={`lg:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 w-72 h-full bg-slate-900 text-white z-50 transition-transform duration-200 ease-out`}>
            {sidebarContent}
        </aside>

    </>
  )
}

export default Sidebar