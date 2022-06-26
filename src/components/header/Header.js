import React from 'react'
import './header.css'
import Me from '../../img/279935101_543893133841232_3276963450580060328_n.png'

function Header() {
  return (
    <div className='header'>
        <article className='header-left'>
          <div className='header-text'>
            <h1>Welcome to my Portfolio</h1>
            {/* Display Languages I know */}
            <div className='header-move'>
              <div className='header-move-wrapper'>
                <li className='header-item'>Web Developer</li>
                <li className='header-item'>React</li>
                <li className='header-item'>JavaScript</li>
                <li className='header-item'>SQL</li>
                <li className='header-item'>CSS</li>
                <li className='header-item'>C#</li>
                <li className='header-item'>HTML</li>
                <li className='header-item'>MongoDB</li>
              </div>
            </div>
            <h2>Hello, My name is Cristian Vega.</h2> 
            <p>I am happy you are here to see my work. Hope you enjoy your stay!</p>
            <p>This page was created with ReactJS. Then deployed on Heroku.</p>
            <a className='links' href='https://github.com/VegaCristian-FS/vega-portfolio/blob/main/README.md'>This site's GitHub link</a>
          </div>
        </article>
        <article className='header-right'>
          <div className='img-background'></div>
            <img src={Me} alt='' className='header-img'/>
        </article>
    </div>
  )
}

export default Header