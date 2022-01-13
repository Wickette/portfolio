import React from 'react'
import './aboutme.css'
import image from '../../assets/images/profile-pic.jpg'

const AboutMe = () => {
    return (
        <div className='about_container' id='about-me'>
            <div>
                <img src={image} alt="profile-pic" />
            </div>
            <div className='about_text'>
                <h1>ABOUT ME</h1>
                <p>Front-end web developer leveraging financial background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of Toronto Coding Bootcamp, with newly developed skills in JavaScript, MERN Stack, and responsive web design. Personable individual, with the ability to work with groups or individually while keeping strong self-motivation and self-discipline. With each project, the aim is to best engage my audience for an impactful user experience. I applied aspects of strong attention to detail, as well as excellent time management skills to assist team members and colleagues with a wide range of projects. Fast learner as it relates to new programming languages and dealing with data. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
            </div>
        </div>
    )
}

export default AboutMe
