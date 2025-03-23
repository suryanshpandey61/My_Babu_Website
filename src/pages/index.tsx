import Navbar from '@/components/Navbar'
import React from 'react'
import '../app/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight:['300','400','500','600'],
    subsets:['latin']
})

function index() {
  return (
    <div className={poppins.className}>
        <Navbar/>
    </div>
  )
}

export default index