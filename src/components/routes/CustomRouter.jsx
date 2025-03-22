import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pokedex from '../pokedex/Pokedex'
import PokemonDetails from '../pokemondetails/PokemonDetails'

const CustomRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Pokedex/>} />
            <Route path='/:name/:id' element={<PokemonDetails />} />
        </Routes>
    </div>
  )
}

export default CustomRouter