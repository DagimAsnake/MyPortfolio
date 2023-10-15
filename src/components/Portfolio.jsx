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
import Monster from '../assets/portfolio/Monster.png'
import Coach from '../assets/portfolio/coachApp.png'
import Shoe from '../assets/portfolio/Shoe.png'

const Portfolio = () => {

  const portfolios = [
    {
      id:11,
      src: Coach,
      demo: 'https://coachapp.netlify.app',
      code: 'https://github.com/DagimAsnake/vueCli-coachApp'
    },
    {
      id:5,
      src: Food,
      demo: 'https://refoodorder.netlify.app/',
      code: 'https://github.com/DagimAsnake/react-foodOrder'
    },
    {
      id:10,
      src: Monster,
      demo: 'https://dagimasnake.github.io/vue-monsterGame/',
      code: 'https://github.com/DagimAsnake/vue-monsterGame'
    },
    {
      id:12,
      src: Shoe,
      demo: 'https://next-shoe-comp.vercel.app/',
      code: 'https://github.com/DagimAsnake/next-ShoeComp'
    },
    {
      id:3,
      src: Ecommerce,
      demo: 'https://ecommerce-b2hy.onrender.com',
      code: 'https://github.com/DagimAsnake/Ecommerce'
    },
    {
      id:1,
      src: Campsite,
      demo: 'https://campsite-lczl.onrender.com',
      code: 'https://github.com/DagimAsnake/yelpcamp'
    },
    {
      id:2,
      src: CourseGoal,
      demo: 'https://coursegoall.netlify.app/',
      code: 'https://github.com/DagimAsnake/CourseGoal'
    },
    {
      id:4,
      src: Expenses,
      demo: 'https://reaexpense.netlify.app/',
      code: 'https://github.com/DagimAsnake/react-expenses'
    },
    {
      id:6,
      src: Hospital,
      demo: 'https://hospital-ibs6.onrender.com',
      code: 'https://github.com/DagimAsnake/hospital'
    },
    {
      id:7,
      src: IctPark,
      demo: '',
      code: 'https://github.com/DagimAsnake/ictFrontNew'
    },
    {
      id:8,
      src: MeetUp,
      demo: 'https://remeetups.netlify.app/',
      code: 'https://github.com/DagimAsnake/react-meetUp'
    },
    {
      id:9,
      src: Qoutes,
      demo: 'https://reactqoutes.netlify.app/',
      code: 'https://github.com/DagimAsnake/reactRouter-Quotes'
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
                 <a href={port.demo} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel="noreferrer"> <button>Demo</button> </a>
                 <a href={port.code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel="noreferrer"> <button>Code</button> </a>
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