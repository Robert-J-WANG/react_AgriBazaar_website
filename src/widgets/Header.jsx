import React from 'react'
import Logo from '../assets/logo.svg'

export default function Header() {
    return (
        <div className='flex items-center justify-between h-20'>
            <span className='hidden md:block text-4xl font-mono font-bold'>AgriBazaar.</span>
            <img src={Logo} alt="" className='w-14 h-14 lg:animate-logo-move' />
            <nav className='flex items-center '>
                <a href="#" className='text-lg text-yellow-800 '>Login</a>
                <a href="#" className='ml-8 bg-green-800 text-lg px-4 py-2 rounded text-white flex items-center'>
                    Register
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 fill-neutral-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </nav>
        </div>
    )
}
