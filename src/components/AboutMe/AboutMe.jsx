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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum provident eum quas tenetur sint veritatis suscipit, perferendis ad asperiores. Nobis at iusto deserunt officiis facere perferendis mollitia omnis alias ratione.</p>
            </div>
        </div>
    )
}

export default AboutMe
