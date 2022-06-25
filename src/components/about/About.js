import React from 'react'
import './about.css'
import Ice from '../../img/20643238_10209846074524840_2234039903488226801_o.jpeg'

function About() {
  return (
    <div className='about'>
        <article className='article-left'>
            <div className='about-img-wrapper'>
                 <img src={Ice} alt='Icecream used as a smiley face' className='about-img' />
            </div>
        </article>
        <article className='article-right'>
            <h2>About Me</h2>
            <p>In 2018 I completed my service with the United States Marine Corps. I made it my mission to learn everything I could to pursue my dream. That dream is to become a full-stack developer. Here are the steps I've taken to get there.</p>
            <p>First, I went to ACI Learning to get basic IT certifications such as ITIL v4, CompTIA A+, CompTIA Security+, CompTIA Network+, EC-Council Certified Network Defender, and EC-Council Ethical Hacking Certifications. </p>
            <p>I chose Full Sail University to pursue a bachelor's in web design and development. Doing so, I've learned to use Virtual Studio Code, Illustrator, XD, Git and GitHub, C#, HTML, CSS, JavaScript, React, Bootstrap, SQL, and MongoDB.</p>
        </article>
    </div>
  )
}

export default About