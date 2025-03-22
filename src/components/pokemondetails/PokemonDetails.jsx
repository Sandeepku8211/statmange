import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
  const {name,id}= useParams();
  const [pokemonde,setPokemonde]= useState({});

  async function dowloadPokemonDe() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response)

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
    <div>
      <div> <img src={pokemonde.image} alt='data is dow' /></div>
      <div>{pokemonde.name}</div>
      <div>{pokemonde.height}</div>
      <div>{pokemonde.weight}</div>
      <div>{pokemonde.types}</div>
    </div>
  )
}

export default PokemonDetails