import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
const navbar = () => {
    const navigate = useNavigate()
    const {user} = useUser()
    const {openSignIn} = useClerk()

  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer'>
      <div className='flex gap-1 items-center'>
        <img src={assets.logo} alt="logo" className='w-15 sm:w-18' onClick={() => navigate('/')}/>
        <h1 className='text-primary-500 text-lg sm:text-xl text-primary font-semibold'>Thinkly.ai</h1>
      </div>

        {
            user ? <UserButton/> : (
                <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get Started <ArrowRight className='w-4 h-4'/></button>
            )
        }
        
    </div>
  )
}

export default navbar