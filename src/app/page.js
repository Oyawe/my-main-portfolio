"use client"
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Work from '@/components/Work'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {

  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <div className='bg-zinc-900'>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  )
}
