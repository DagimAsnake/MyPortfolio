import React from 'react'
import Campsite from '../assets/portfolio/Campsite.png'
import CourseGoal from '../assets/portfolio/CourseGoal.png'
import Ecommerce from '../assets/portfolio/Ecommerce.png'
import Expenses from '../assets/portfolio/Expenses.png'
import Food from '../assets/portfolio/Food.png'
import Hospital from '../assets/portfolio/Hospital.png'
import IctPark from '../assets/portfolio/IctPark.png'
import MeetUp from '../assets/portfolio/MeetUp.png'
import Qoutes from '../assets/portfolio/Qoutes.png'


const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src: Campsite
    },
    {
      id:2,
      src: CourseGoal
    },
    {
      id:3,
      src: Ecommerce
    },
    {
      id:4,
      src: Expenses
    },
    {
      id:5,
      src: Food
    },
    {
      id:6,
      src: Hospital
    },
    {
      id:7,
      src: IctPark
    },
    {
      id:8,
      src: MeetUp
    },
    {
      id:9,
      src: Qoutes
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        {/* md:h-screen */}
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {portfolios.map((port) => {
            return (
              <div key={port.id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={port.src} alt={port.src} className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default Portfolio