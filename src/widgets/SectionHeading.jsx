import React from 'react'

export default function SectionHeading({ title, subTitle }) {
    return (
        <div>
            <h2 className='text-[2.635em] font-black text-center'>{title}</h2>
            <p className='text-xl mt-4 text-center to-gray-500'>{subTitle}</p>
        </div>
    )
}
