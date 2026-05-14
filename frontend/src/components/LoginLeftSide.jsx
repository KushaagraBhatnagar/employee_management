
function LoginLeftSide() {
  return (
    <div className="hidden md:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-[#17163b] via-[#1f1e4d] to-[#2a2a67]">
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-140px] w-[420px] h-[420px] bg-indigo-500/10 rounded-full blur-[90px]" />

      <div className="absolute inset-0 flex items-center px-12 lg:px-16">
        <div className="max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Employee <br /> Management System
          </h1>
          <p className="mt-6 text-base text-indigo-200/80 leading-relaxed">
            Streamline your workforce operations, track attendance, manage payroll, and empower your team securely.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginLeftSide