import React from 'react'
import Video from '../assets/AgriNZ.mp4'

export default function
    () {
    return (
        <div className='grid justify-items-center gap-8  relative'>
            {/* title */}
            <p className='text-4xl md:text-6xl font-black text-green-800 text-center leading-normal md:leading-normal '>
                Welcome to AgriBazaar NZ !
            </p>

            {/* content */}
            <p className='text-2xl text-yellow-800 md:w-1/2 '>Your ultimate destination for cutting-edge farming machinery solutions in the heart of Aotearoa. Our platform brings together farmers, ranchers, and agricultural enthusiasts from across New Zealand, offering a wide range of top-quality equipment to revolutionize your farming practices.
            </p>

            {/* button */}
            <div>
                <button className='rounded bg-yellow-800 text-lg text-white px-8 py-3 hover:scale-110 ease-in-out duration-300 opacity-60'>Rent Now</button>
                <button className='rounded text-lg bg-green-800 text-white px-8 py-3 ml-8 hover:scale-110 ease-in-out duration-300 opacity-60'>Buy Now</button>
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

                {/* <div className="flex absolute rounded-full bg-white -bottom-7 px-5 py-4 drop-shadow-xl">
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
                </div> */}
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
