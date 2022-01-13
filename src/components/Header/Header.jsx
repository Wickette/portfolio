import React from 'react'
import clouds from '../../assets/images/moving-clouds.gif'
import resume from '../../assets/STEPHANIE_CLARK_CV.pdf'
import './header.css'

const Header = () => {
    return (
        <div className="home">
            <img className="show_bg" alt="background"></img>
            <div className="container">
            <div class="nine">
                <h1>
                Stephanie Clark<span>Full Stack Developer</span>
                </h1>
            </div>
            <div className="btnWrapper">
                <div className="btn">
                    <span><a href={resume} target="_blank" rel="noreferrer">Resume</a></span>
                </div>
            </div>
            </div>
      </div>
    )
}

export default Header


