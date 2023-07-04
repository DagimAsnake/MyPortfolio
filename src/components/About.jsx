import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pt-4'>
          <p className='text-4xl font-bold inline border-b-4'>About</p>
        </div>

        <p className='text-xl mt-20'>
          Hello, my name is Dagim Asnake and I'm a passionate Full Stack Developer with expertise in both Frontend and Backend Technologies.
          I have hands-on experience with HTML, CSS, JavaScript, TypeScript, ReactJS, Material UI, NextJS, NodeJS, Express, Django, and databases such as MongoDB and MySQL.
          I am a firm believer in Agile Methodology and have collaborated on projects utilizing these technologies, delivering top-notch solutions that have exceeded client expectations.
          I am always eager to learn and grow, and am excited to be part of a team that is dedicated to creating innovative solutions that make a positive difference in people's lives.
        </p>

        <br />

        <p className='text-xl'>
          I am a highly ambitious, self-motivated and driven software engineer with a passion for innovation and problem-solving.
          I graduated from Addis Ababa Science and Technology University with a degree in Computer Engineering, where I maintained a 3.73 GPA.
          I am always seeking new challenges and opportunities to learn and grow.
          I am confident that I have the skills and experience necessary to be successful in any role I am given.
          Let's build something great together!
        </p>
      </div>
    </div>
  )
}

export default About