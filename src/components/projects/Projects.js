import React from 'react'
import './projects.css'

function projects({
  img,
  link,
  xd,
  alt,
  github,
  title,
  code,
  desc
}) {
  return (
    <div className='projects'>
      <article className='project-card'>
            <img src={img} alt={alt}/>
      </article>
      <article className='project-text'>
        <h2>{title}</h2>
        <h3>{code}</h3>
        <p>{desc}</p>
        <ul>
          <li><a href={link}>Website link</a></li>
          <li><a href={xd}>Adobe XD link</a></li>
          <li><a href={github}>GitHub link</a></li>
        </ul>
      </article>
      
    </div>
  )
}

export default projects