import React from 'react'
import './projects.css'

function projects({img,link,xd,alt,github}) {
  return (
    <div >
      <article className='project-card'>
        <a href={link}>
            <img src={img} alt={alt}/>
        </a>
        {console.log(img)}
      </article>s
      <ul>
        <li><a href={xd}>Adobe XD link</a></li>
        <li><a href={github}>GitHub link</a></li>
      </ul>
    </div>
  )
}

export default projects