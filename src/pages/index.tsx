import Navbar from '@/components/Navbar'
import React from 'react'
import '../app/globals.css'
import { Poppins } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Work from '@/components/Work'

const poppins = Poppins({
    weight:['300','400','500','600'],
    subsets:['latin']
})

function index() {
  return (
    <div className={poppins.className}>
        <Navbar/>
        <HeroSection/>
        <Work/>
    </div>
  )
}

export default index