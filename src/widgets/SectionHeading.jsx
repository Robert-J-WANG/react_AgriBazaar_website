import React from 'react'

export default function SectionHeading({ title, subTitle }) {
    return (
        <div>
            <h2 className='text-[2.635em] font-black text-center text-green-700'>{title}</h2>
            <p className='text-2xl mt-4 text-center text-yellow-700'>{subTitle}</p>
        </div>
    )
}
