import { ArrowRight, Shield, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import LoginLeftSide from '../components/LoginLeftSide'
function LoginLanding() {

  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description: "Sign in to manage the organisation",
      icon: Shield
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description: "Sign in to access your account",
      icon: User
    }
  ]
  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-white'>
      <LoginLeftSide/>
      <div className='w-full md:w-1/2 flex items-center justify-center px-6 py-12'>
        <div className='w-full max-w-md'>

          {/*Header*/}
          <div className='text-center md:text-left'>
            <h1 className='text-2xl font-semibold text-slate-900'>Welcome Back!</h1>
            <p className='mt-2 text-sm text-slate-500'>Select Your Portal</p>
          </div>

          {/* Portal List */}
          <div className ='mt-8 space-y-4'>
            {portalOptions.map((option)=>(
              <Link key={option.to} to={option.to} className='flex items-center gap-4 rounded-xl border border-indigo-200/70 bg-indigo-50/50 px-5 py-4 transition hover:bg-indigo-50 hover:border-indigo-300'>
                <option.icon className='w-5 h-5 text-indigo-500'/>
                <div className='flex items-center justify-between w-full'>
                  <div>
                    <h3 className='text-sm font-semibold text-slate-900'>{option.title}</h3>
                    <p className='mt-1 text-xs text-slate-500'>{option.description}</p>
                  </div>
                  <ArrowRight className='w-4 h-4 text-indigo-400'/>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginLanding