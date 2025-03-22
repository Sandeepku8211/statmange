
import './App.css'
import Nav from './components/nav/Nav'
import Pokedex from './components/pokedex/Pokedex'
import PokemonDetails from './components/pokemondetails/PokemonDetails'
import CustomRouter from './components/routes/CustomRouter'
import Search from './components/serach/Search'

function App() {


  return (
    <>
     <Nav />
     <br/>
     <Search />
     <CustomRouter />
    
       
    </>
  )
}

export default App
