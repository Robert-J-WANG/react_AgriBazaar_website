import React from 'react'
import SectionHeading from './SectionHeading'
import { clientsData } from '../data'

function Clients() {
    return (
        <div>
            <SectionHeading title='Partners and Suppliers' subTitle='Your Trusted Allies for Premium Farming Machinery' />
            {/* svg logo */}
            <div className='flex flex-col lg:flex-row items-center md:justify-between gap-8 my-16'>
                {clientsData.map(item => (
                    <img key={item.id} src={item.img} alt="#" className='w-32 h-auto' />
                ))}

            </div>
            {/* comments */}
            <div className='grid justify-items-center rounded-2xl px-4 mt-28 bg-white'>
                <img src='https://www.kosmo.com.my/wp-content/uploads/2022/09/3657E819-31E4-4C49-AEA1-D39644C77062.jpeg' alt="" className='w-28 h-28 rounded-full -translate-y-1/2' />
                <p className='my-5 text-xl font-medium'>
                    "Great service and excellent machinery! Partners and Suppliers made my farming equipment purchase a breeze. Highly satisfied!"
                </p>
                <p className='text-2xl font-bold'>Susan White</p>
                <p className='text-xl text-gray-500 mb-8'>
                    Owner of the NewKiwi Farm Ltd.
                    <a href="#" className='text-blue-600 '>@Company</a>
                </p>
            </div>
            {/* right decoration */}
            <svg
                width="98"
                height="256"
                viewBox="0 0 98 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 -z-10 -translate-y-3/4"
            >
                <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_0_386)" />
                <defs>
                    <linearGradient
                        id="paint0_linear_0_386"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="256"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="0.774017" stopColor="#EAEAEA" />
                        <stop offset="1" stopColor="#DFDFDF" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Clients