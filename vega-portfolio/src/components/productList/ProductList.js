import React from 'react'
import './productList.css'
import Project from '../projects/Projects'
import {products} from '../../data'

function ProductList() {
  return (
    <div className='product-list'>
        <article className='product-text'>
            <h2 className='product-title'>Projects</h2>
            <p>Below are projects I have worked on in the past</p>
        </article>
        <article className='projects'>
            {products.map((item) => (
            <Project key={item.id} img={item.img} link={item.link}/>
            ))}
        </article>
        

    </div>
  )
}

export default ProductList