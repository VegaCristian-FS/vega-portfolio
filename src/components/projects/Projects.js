import React from 'react'
import './projects.css'

function projects({img,link,xd}) {
  return (
    <div className='project-card'>
        <a href={link}>
            <img src={img} />
        </a>
        <a href={xd}>Adobe XD link</a>
    </div>
  )
}

export default projects