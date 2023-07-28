import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { solutionsData } from '../data'

function Solutions() {
    const [selectId, setSelectedId] = useState(1);
    return (
        <div>
            <SectionHeading title='Our Solutions' subTitle='Your Path to Agricultural Excellence' />


            <div className='flex flex-col md:flex-row gap-5 mt-20 h-auto'>

                <ul className='flex flex-col basis-2/5 space-y-5 rounded-l-3xl overflow-hidden '>
                    {solutionsData.map(item => (
                        <li className={`flex flex-col justify-between h-48 p-5  border cursor-pointer  bg-white  hover:bg-indigo-300 hover:scale-105 duration-500`} key={item.id} onClick={() => setSelectedId(item.id)}>
                            <p className='lg:text-3xl font-bold text-black'>{item.title} </p>

                            <p className="lg:text-xl text-gray-700 leading-7">
                                {item.description}
                            </p>
                            <p className=' lg:text-xl text-blue-500' href="#">read more...</p>
                        </li>
                    ))}

                </ul>
                {/* </div> */}

                {/* right part */}
                <div className=' h-[38.5em] basis-3/5 rounded-r-3xl overflow-hidden' >
                    <img className='w-full h-full object-cover hover:scale-105 duration-500' alt="" src={
                        solutionsData.find(item => item.id === selectId).img} />
                </div>
            </div>
        </div>
    )
}

export default Solutions