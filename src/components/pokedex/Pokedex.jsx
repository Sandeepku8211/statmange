import axios from 'axios'
import './Pokedex.css'
import React, { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon'

const Pokedex = () => {
    const [isloading,setIsloading]=useState(true)
    const [pokedex,setPokedex]=useState([])
    const [pokedexurl,SetPokedexurl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nexturl,setNexturl]=useState('');
    const [preurl,setPreurl]=useState('')

 

async function downLoadPokeapi(){
    const response = await axios.get(pokedexurl);
    setNexturl(response.data.next);
    setPreurl(response.data.previous)
    
    const pokemonResult= await response.data.results;
    const pokemonurl = pokemonResult.map
    ((pokemon)=> axios.get(pokemon.url));
    const pokemonData = await axios.all(pokemonurl)
 
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
    

    setIsloading(false)

}

useEffect(()=>{
    downLoadPokeapi()
},[pokedexurl])
  return (
    <div className='container'>
   <div className='wrap'>
   {
        (isloading)?"loadin ..":pokedex.map((p)=><Pokemon name={p.name} image={p.image}key={p.id} type={p.type} id={p.id}/>)
    }
   </div>
   <div className='btn'>
    <button disabled={preurl==null} onClick={()=>SetPokedexurl(preurl)} className='p-4 m-4 bg-blue-500 text-white'>pre</button>
    <button disabled={nexturl==null} onClick={()=>SetPokedexurl(nexturl)} className='p-4 m-4 bg-blue-500 text-white'>next</button>
   </div>
    </div>
  )
}

export default Pokedex