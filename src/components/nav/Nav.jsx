import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <Link>
            <h1>PokeDex</h1>
        </Link>
    </div>
  )
}

export default Nav