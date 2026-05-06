import React from 'react'
import LoginLeftSide from '../components/LoginLeftSide'
import { ArrowRightIcon, ShieldIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description: "Manage employees, departments, payroll and system configurations.",
      icon: ShieldIcon
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description: "View your profile, track attendence, request time off, and access payslips.",
      icon: UserIcon
    }
  ]
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <LoginLeftSide/>
      
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen'>
      <div className='w-full max-w-md animate-fade-in relative z-10'>
        {/* Header */}
        <div className='mb-10 text-center md:text-left'>
          <h2 className='text-3xl font-medium text-gray-900 tracking-tight mb-3'>Welcome Back</h2>
          <p className='text-gray-500'>Select your portal to securely access the system</p>
        </div>

        {/* Portal list */}
        <div className='space-y-4'>
          {portalOptions.map((portal)=>(
            <Link key={portal.to} to={portal.to} className='group block bg-gray-50 border border-gray-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100'>
              <div className='flex justify-between items-center'>
                <h3 className='text-lg text-gray-800 group-hover:text-gray-600 mb-1 transition-colors'>{portal.title}</h3>
                <ArrowRightIcon  className='w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300'/>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className='mt-12 text-center md:text-left text-sm text-gray-400'>
          <p>© {new Date().getFullYear()} QuickEMS. All right resserved.</p>

        </div>
      </div>

      </div>
      
    </div>
  )
}

export default LoginLanding
