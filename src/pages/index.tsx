import Navbar from '@/components/Navbar'
import React from 'react'
import '../app/globals.css'
import { Poppins } from 'next/font/google'
import HeroSection from '@/components/HeroSection'

const poppins = Poppins({
    weight:['300','400','500','600'],
    subsets:['latin']
})

function index() {
  return (
    <div className={poppins.className}>
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default index