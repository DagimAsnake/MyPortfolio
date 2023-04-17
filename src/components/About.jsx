import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut, et tempore? Facilis sunt officia est inventore mollitia esse? 
                Voluptatum repudiandae, blanditiis accusantium temporibus sunt modi 
                optio asperiores laborum fugiat dolore quibusdam natus rerum obcaecati 
                aspernatur dignissimos totam minima quo reprehenderit esse velit in 
                eligendi eveniet. Deserunt inventore unde enim odit!
            </p>
        
            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Libero animi doloribus iure aliquid harum. Fugiat vitae, 
                inventore ad vero facere voluptatem sunt modi laudantium. 
                Inventore aliquam facere corrupti, minima molestias harum
                reprehenderit, nisi soluta nobis delectus fuga eaque totam 
                error laborum nam veniam praesentium ab obcaecati officia maxime,
                dolorum distinctio?
            </p>
        </div>
    </div>
  )
}

export default About