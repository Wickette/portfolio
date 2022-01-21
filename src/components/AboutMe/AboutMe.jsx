import React from 'react'
import './aboutme.css'
import image from '../../assets/images/profile-pic.jpg'

const AboutMe = () => {
  return (
    <body className='font-sans antialiased leading-normal tracking-wider bg-cover about_container' id='about-me' style={{color: '#092F4B'}}>
      <div className='max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0'>
        <div id='profile' className='w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0'>
          <div className='p-4 md:p-12 text-center lg:text-left'>
            {/* image for small screens */}
            <div className='block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center small-picture'></div>
            <h1 className='text-6xl font-bold pt-8 lg:pt-0'>Stephanie Clark</h1>
            <div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2' style={{borderBottom: '#D7B89F solid'}}></div>
            <p className='pt-4 text-base font-bold flex items-center justify-center lg:text-2xl'>
              <svg className='h-4 fill-current pr-4' style={{color: '#D7B89F'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z' />
              </svg>
              About Me
            </p>
            <p className='pt-2 text-gray-600 text-xs lg:text-lg flex items-center justify-center'>
              <svg className='h-4 fill-current pr-4' style={{color: '#D7B89F'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z' />
              </svg>Location - Orillia, Ontario, Canada
            </p>
            <p className='pt-6 text-sm'>Front-end web developer leveraging financial background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of Toronto Coding Bootcamp, with newly developed skills in JavaScript, MERN Stack, and responsive web design. Personable individual, with the ability to work with groups or individually while keeping strong self-motivation and self-discipline. With each project, the aim is to best engage my audience for an impactful user experience. I applied aspects of strong attention to detail, as well as excellent time management skills to assist team members and colleagues with a wide range of projects. Fast learner as it relates to new programming languages and dealing with data. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
            </p>
            <div className='pt-12 pb-8'>
              <button className='get-in-touch font-bold py-2 px-4 rounded-full'>
                <a className='' href="#contact-me"> Get In Touch </a>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-2/5'>
          <img src={image} className='rounded-none lg:rounded-lg shadow-2xl hidden lg:block' alt='profile-pic' />
        </div>
      </div>
    </body>
  )
}

export default AboutMe