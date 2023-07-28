import React from 'react'
import Header from '../widgets/Header'
import Hero from '../widgets/Hero'
import Solutions from '../widgets/Solutions'
import HowItWorks from '../widgets/HowItWorks'
import Clients from '../widgets/Clients'
import Contact from '../widgets/Contact'
import Footer from '../widgets/Footer'

export default function Index() {
    return (
        <div className='container mx-auto p-4 bg-green-100 relative'>
            <header className='ticky top-0 z-40 w-full bg-white px-3' >
                <Header />
            </header>

            <main className='mt-20'>
                <Hero />
                <section className='md:p-20'>
                    <Solutions />
                </section>

                <section className='mt-20'>
                    <HowItWorks />
                </section>

                <section className='mt-20 w-3/4 mx-auto '>
                    <Clients />
                </section>

                <section className='mt-20 '>
                    <Contact />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}
