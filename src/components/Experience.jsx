import React from 'react'

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            alt: 'html',
            style: 'shadow-orange-500'
        }, 
        {
            id: 2,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            alt: 'css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            alt: 'tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 4,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            alt: 'bootstrap',
            style: 'shadow-violet-600'
        },
        {
            id: 5,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            alt: 'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            alt: 'typescript',
            style: 'shadow-sky-500'
        },
        {
            id: 7,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: 'react',
            style: 'shadow-blue-600'
        },
        {
            id: 8,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" ,
            alt: 'next',
            style: 'shadow-white'
        },
        {
            id: 9,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            alt: 'node',
            style: 'shadow-lime-500',
        },
        {
            id: 10,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            alt: 'express',
            style: 'shadow-white',
        },
        {
            id: 11,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            alt: 'mysql',
            style: 'shadow-blue-500'
        },
        {
            id: 12,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            alt: 'mongo',
            style: 'shadow-lime-500'
        },
        {
            id: 13,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            alt: 'git',
            style: 'shadow-red-600'
        },
        {
            id: 14,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            alt: 'github',
            style: 'shadow-gray-500'
        },
        {
            id: 15,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
            alt: 'graphql',
            style: 'shadow-pink-500'
        },
        {
            id: 16,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            alt: 'java',
            style: 'shadow-blue-500'
        },
        {
            id: 17,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            alt: 'c++',
            style: 'shadow-pink-700'
        },
        {
            id: 18,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            alt: 'python',
            style: 'shadow-yellow-500'
        },
        {
            id: 19,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            alt: 'php',
            style: 'shadow-blue-500'
        },
        {
            id: 20,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            alt: 'django',
            style: 'shadow-green-700'
        },
        {
            id: 21,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
            alt: 'materialUi',
            style: 'shadow-blue-500'
        },
        {
            id: 22,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
            alt: 'wordPress',
            style: 'shadow-blue-500'
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    experiences.map((expr) => {
                        return(
                            <div key={expr.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${expr.style}`}>
                                <img src={expr.src} alt={expr.alt} width={200} height={250} className={`w-20 mx-auto ${expr.alt === 'github' ? "bg-white rounded-full" : ''} ${expr.imgStyle}`} />
                                <p className='mt-4 capitalize'>{expr.alt}</p>
                            </div>
                        )
                    })
                }
               
            </div>

        </div>
          
    </div>
  )
}

export default Experience