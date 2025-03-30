import React from 'react'
import profileimage2 from "/profileimage2.jpeg"

const Hero = () => {
  return (
    <div id='home' className='text-white px16
     flex min-h-scree w-full items-center py-28 md:px-32'>
      <div className='flex flex-col items-center gap-10 text-white'>
    <div>
      <img src={profileimage2} alt="" />
    </div>
      </div>
     </div>
  )
}

export default Hero