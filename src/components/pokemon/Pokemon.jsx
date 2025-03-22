import React from 'react'

const Pokemon = ({name,image, id,}) => {
  return (
    <div>
        <div>{name}</div>
        <div> <img src={image} alt='image is loaded' /> </div>
       
    </div>
  )
}

export default Pokemon