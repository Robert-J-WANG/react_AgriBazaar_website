import React from 'react'
import Video from '../assets/production_ID_4167404.mp4'

export default function
    () {
    return (
        <div className='grid justify-items-center gap-8 pb-28 relative'>
            {/* title */}
            <p className='text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal '>
                MACHINERY & WORKSHOP TOOLS
            </p>

            {/* content */}
            <p className='text-xl text-gray-600 md:w-1/2 '>Need something special for the workshop? Look here for heaters, bandsaws, belt machines, bench drills and pedestal drills, compressors, benders, broach cutters, drill machines, dust extractors, folders, rollers, punches, generators, grinders, jacks, lathes, planers and any other type of workshop machinery.
            </p>

            {/* button */}
            <div>
                <button className='rounded bg-blue-500 text-base text-white px-8 py-3'>Booking Now</button>
                <button className='rounded text-base bg-gray-900 text-white px-8 py-3 ml-8'>Learn More</button>
            </div>

            {/* svg right */}
            <div className='relative w-full'>
                <svg
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 -z-10"
                >
                    <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_0_22)" />
                    <defs>
                        <linearGradient
                            id="paint0_linear_0_22"
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

            {/* video container */}
            <div className='relative grid justify-items-center'>
                <video src={Video} controls className='w-[768px] h-[432px] object-cover object-top rounded'></video>

                <div className="flex absolute rounded-full bg-white -bottom-7 px-5 py-4 drop-shadow-xl">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3"
                    >
                        <circle cx="12" cy="12" r="11" stroke="#999999" strokeWidth="2" />
                        <path d="M10 17L16 12L10 7V17Z" fill="#999999" />
                    </svg>
                    Watching 2mins Demo
                </div>
            </div>
            {/* svg left */}
            <div className='relative w-full'>
                <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='absolute bottom-0 md:bottom-20 left-0 -z-10'
                >
                    <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_0_23)" />
                    <defs>
                        <linearGradient
                            id="paint0_linear_0_23"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="128"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.774017" stopColor="#EAEAEA" />
                            <stop offset="1" stopColor="#DFDFDF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

        </div>
    )
}
