import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <div>
        <Link to='/'>
            <h1>PokeDex</h1>
        </Link>
        </div>
    </div>
  )
}

export default Nav