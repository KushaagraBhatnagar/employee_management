import LoginLanding from '../pages/LoginLanding'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, EyeOffIcon, EyeIcon, Loader2Icon } from 'lucide-react'
import { useState } from 'react'
import LoginLeftSide from './LoginLeftSide'
function LoginForm({role, title, subtitle}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = async (e)=> {
        e.preventDefault()
        setLoading(true)
    }
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
        <LoginLeftSide/>
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                <Link to="/login" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors">
                    <ArrowLeftIcon size={16}/> Back to portals
                </Link>

                <div className="mt-8">
                    <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">{title}</h1>
                    <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
                </div>

                {error && (
                    <div className="mt-6 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="admin@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                placeholder='Enter your Password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}

                            </button>
                        </div>
                    </div>
                    <button type="submit" disabled={loading} className="w-full btn-primary py-3 text-base rounded-lg inline-flex items-center justify-center gap-2">
                        {loading && <Loader2Icon className="h-4 w-4 animate-spin text-white/90" aria-hidden="true" />}
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginForm