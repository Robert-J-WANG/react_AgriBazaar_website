import React from 'react'
import SectionHeading from './SectionHeading'
import { specialistsData } from '../data'

function HowItWorks() {
    return (
        <div className='flex flex-col items-center'>
            <SectionHeading title='Farm Machinery Specialists' subTitle='Elevating Your Farming Experience with Top-Notch Equipment' />

            <div className='mt-14 grid grid-cols-2 md:grid-cols-3 w-11/12 gap-5  '>
                {
                    specialistsData.map(item => (
                        <div className='grid justify-items-center gap-5 py-5 rounded-2xl bg-white cursor-pointer hover:bg-indigo-300 hover:scale-105 duration-500' key={item.id}>
                            <img src={item.icon} className='w-14 h-14 rounded-full' alt="" />
                            <p className="text-xl font-bold">{item.title} </p>
                            <p className="text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default HowItWorks