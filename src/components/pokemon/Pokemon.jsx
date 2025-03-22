import React from 'react'
import './Pokemon.css'
import { Link, useParams } from 'react-router-dom'

const Pokemon = ({name,image, id})=>{
  

  return (
    <div className='wrap'>
      <Link to={`/${name}/${id}`}>
      <div className='pk'>
        
        <div> <img className='img' src={image} alt='image is loaded' /> </div>
        <div className='heading'>{name}</div>
       
    </div>
      </Link>
    </div>
  )
}

export default Pokemon