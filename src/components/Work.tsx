import React from 'react'

function Work() {
  return (
    <div className='w-[85%] mx-auto mt-[3%]'>
        {/* heading div  */}
        <div>
            <h1 className='text-[36px]'>How Mybabu works?</h1>
        </div>
        {/* grid-4 div  */}
        <div className='grid-cols-4 grid mt-[2%]'>
            <div>Submit your Request</div>
            <div>Expert Matching</div>
            <div>Recieve Assistant</div>
            <div>Track Progress</div>
        </div>


    </div>
  )
}

export default Work