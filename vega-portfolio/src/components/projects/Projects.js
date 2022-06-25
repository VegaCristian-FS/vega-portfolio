import React from 'react'
import './projects.css'

function projects({img,link}) {
  return (
    <div className='project-card'>
        <a href={link}>
            <img src={img} />
        </a>
    </div>
  )
}

export default projects