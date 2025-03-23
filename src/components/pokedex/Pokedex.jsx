import axios from 'axios'
import './Pokedex.css'
import React, { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon'

const Pokedex = () => {
    // const [isloading,setIsloading]=useState(true)
    // const [pokedex,setPokedex]=useState([])
    // const [pokedexurl,SetPokedexurl] = useState('https://pokeapi.co/api/v2/pokemon')
    // const [nexturl,setNexturl]=useState('');
    // const [preurl,setPreurl]=useState('')

    const [pokeListstate,setPokeliststate]=useState({
        pokedex:[],
        isloading:true,
        
        pokedexurl:'https://pokeapi.co/api/v2/pokemon',
        nexturl:'',
        preurl:''
    })

 

async function downLoadPokeapi(){
    setPokeliststate({...pokeListstate,isloading:true})
    const response = await axios.get(pokeListstate.pokedexurl);
    setPokeliststate({...pokeListstate, nexturl:response.data.next,preurl:response.data.previous})
    // setPreurl(response.data.previous)
   
    
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

    // setPokedex(res)
    setPokeliststate({...pokeListstate,pokedex:res,isloading:false})
    
    // setIsloading(false)

}

useEffect(()=>{
    downLoadPokeapi()
},[pokeListstate.pokedexurl])
  return (
    <div className='container'>
   <div className='wrap'>
   {
        (pokeListstate.isloading)?"loadin ..":pokeListstate.pokedex.map((p)=><Pokemon name={p.name} image={p.image}key={p.id} type={p.type} id={p.id}/>)
    }
   </div>
   <div className='btn'>
    <button disabled={pokeListstate.preurl==null} onClick={()=>setPokeliststate({...pokeListstate, pokedexurl:pokeListstate.preurl})} className='p-4 m-4 bg-blue-500 text-white'>pre</button>
    <button disabled={pokeListstate.nexturl==null} onClick={()=>setPokeliststate({...pokeListstate, pokedexurl:pokeListstate.nexturl})} className='p-4 m-4 bg-blue-500 text-white'>next</button>
   </div>
    </div>
  )
}

export default Pokedex