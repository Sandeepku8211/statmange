import axios from 'axios';
import './PokemonDetails.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
  const {name,id}= useParams();
  const [pokemonde,setPokemonde]= useState({});

  async function dowloadPokemonDe() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
 

    setPokemonde({
      name:response.data.name,
      image:response.data.sprites.front_default,
      height:response.data.height,
      weight:response.data.weight,
      types:response.data.types.map((t)=>t.type.name)

    })
    
  }

  useEffect(()=>{
    dowloadPokemonDe()
  })
  
  return (
    <div className='con'>
      <div className='bg-black-500'> <img className='w-[400px]' src={pokemonde.image} alt='data is dow' /></div>
      <div className='font'>{pokemonde.name}</div>
     <div className='dis'>
     <div className='p-4 m-4 bg-blue-500 text-white'>Height : {pokemonde.height}</div>
     <div className='p-4 m-4 bg-blue-500 text-white'>Weight : {pokemonde.weight}</div>
     </div>
      <div className='p-4 m-4 bg-blue-500 text-white' >Types : {pokemonde.types}</div>
    </div>
  )
}

export default PokemonDetails