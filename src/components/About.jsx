import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>About</p>
            </div>

            <p className='text-xl mt-20'>
            Hi there! My name is Dagim Asnake and I’m a Full Stack Developer. 
            I’m passionate about coding and love to learn new things. I have experience working with Frontend Technologies like
            HTML, CSS, javascript, Typescript, Reactjs, Material Ui, NextJs and also on Backend Technologies like Nodejs, Express, django. 
            I also have exprience with MongoDB and Mysql database. 
            I’m also familiar with Agile Methodology and have worked on projects using the above technologies that i mentioned. 
            I’m excited to be part of a team that is dedicated to creating innovative solutions
             that make a difference in people’s lives.
            </p>
        
            <br />

            <p className='text-xl'>
                I am highly ambitious, self-motivated and driven software engineer based in Addis Ababa, Ethiopia.
                Currently, am learning at Addis Ababa Science and Technology University in a Department of Electrical
                and Computer Engineering with in a stream of Computer Engineering. I am always seeking new experience and love
                to keep myself engaged and learning new things.
            </p>
        </div>
    </div>
  )
}

export default About