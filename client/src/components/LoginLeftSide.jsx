import React from 'react'

const LoginLeftSide = () => {
  return (
    <div className='hiddden md:flex w-1/2 bg-gray-950 relative overflow-hidden border-r border-slate-200'>
      <div className='absolute -top-30 -left-30 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl '>
      </div>
      <div className=' relative z-10 flex flex-col items-start justify-center p-12 lg:p-20 w-full h-full'>
        <h1 className='text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight'> Employee <br/> Management System</h1>
        <p className='text-gray-400 text-lg max-w-md leading-relaxed'>Streamline your workforce operations,
            track attendence, manage payroll, and 
            empower your team securely.
        </p>
      </div>
    </div>
  )
}

export default LoginLeftSide
