import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon'

const Pokedex = () => {
    const [isloading,setIsloading]=useState(true)
    const [pokedex,setPokedex]=useState([])

async function downLoadPokeapi(){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    // console.log(response)
    const pokemonResult= await response.data.results;
    const pokemonurl = pokemonResult.map
    ((pokemon)=> axios.get(pokemon.url));
    const pokemonData = await axios.all(pokemonurl)
    console.log(pokemonData)
    const res = pokemonData.map((pokedata)=>{
        const pokemon = pokedata.data;
        return{
            name:pokemon.name,
            image:pokemon.sprites.front_default,
            id:pokemon.id,
            type:pokemon.types.map((p)=>p.type)

        }
    })

    setPokedex(res)
    console.log(pokemonData)

    setIsloading(false)

}

useEffect(()=>{
    downLoadPokeapi()
},[])
  return (
    <div>
   <div>
   {
        (isloading)?"loadin ..":pokedex.map((p)=><Pokemon name={p.name} image={p.image}key={p.id} type={p.type} id={p.id}/>)
    }
   </div>
    </div>
  )
}

export default Pokedex