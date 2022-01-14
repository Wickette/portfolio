import React from 'react'
import './aboutme.css'
import image from '../../assets/images/profile-pic.jpg'

const AboutMe = () => {
    return (
        <div className='about_container' id='about-me'>
               <section class="clearfix section-1" id="carousel_c935">
      <div class="u-clearfix u-sheet u-sheet-1">
        <img class="u-image u-image-default u-opacity u-opacity-75 u-image-1" src={image} alt="" data-image-width="2316" data-image-height="3088"/>
        <div class="u-align-left u-container-style u-expanded-width-xs u-group u-group-1">
          <div class="u-container-layout u-valign-middle-sm u-valign-top-xs u-container-layout-1">
            <h1 class="u-align-right u-custom-font u-font-playfair-display u-text u-title u-text-1"><b>Stephanie</b>&nbsp;Clark
            </h1>
            <div class="u-border-3 u-border-grey-dark-1 u-shape u-shape-left u-shape-1"></div>
            <div class="u-container-style u-group u-group-2">
              <div class="u-container-layout u-container-layout-2">
                <h3 class="u-custom-font u-font-playfair-display u-text u-text-2">About Me</h3>
                <div class="u-border-8 u-border-grey-dark-1 u-line u-line-horizontal u-line-1"></div>
                <p class="u-text u-text-3">Front-end web developer leveraging financial background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of Toronto Coding Bootcamp, with newly developed skills in JavaScript, MERN Stack, and responsive web design. Personable individual, with the ability to work with groups or individually while keeping strong self-motivation and self-discipline. With each project, the aim is to best engage my audience for an impactful user experience. I applied aspects of strong attention to detail, as well as excellent time management skills to assist team members and colleagues with a wide range of projects. Fast learner as it relates to new programming languages and dealing with data. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="u-shape u-shape-rectangle u-white u-shape-2"></div>
      </div>
    </section>
    <section class="u-clearfix u-section-2" id="sec-351d">
      <div class="u-clearfix u-sheet u-sheet-1"></div>
    </section>
        </div>
    )
}

export default AboutMe
