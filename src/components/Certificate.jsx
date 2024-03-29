import React from 'react'
import php from '../assets/certificate/Php.jpeg'
import python from '../assets/certificate/python.png'
import UdemyPython from '../assets/certificate/UdemyPython.jpg'
// import UdemyPyBeg from '../assets/certificate/UdemyPyBeg.jpg'
// import UdemyGit from "../assets/certificate/UdemyGit.jpg"
import Docker from "../assets/certificate/Docker.jpg" 
import UdemyReact from "../assets/certificate/UdemyReact.jpeg"
import UdemyNextjs from "../assets/certificate/UdemyNextjs.jpg"

const cert = [
  {
    id: 1,
    src: php
  },
  {
    id: 3,
    src: UdemyNextjs
  },
  {
    id: 2,
    src: UdemyPython
  },
  {
    id: 5,
    src: Docker
  },
  {
    id: 4,
    src: python
  },
  {
    id: 6,
    src: UdemyReact
  },
]

const Certificate = () => {
  return (
    <div name='certificate' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Certificates</p>
          <p className='py-6'>Here are some of my achivements</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-8 px-12 sm:px-0'>

          {cert.map((port) => {
            return (
              <div key={port.id} className=' rounded-lg'>
                <img src={port.src} alt={port.src} className='rounded-md duration-200 hover:scale-105' />
              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default Certificate