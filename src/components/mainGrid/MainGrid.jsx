import { useState, useEffect } from 'react'
import './MainGrid.scss'
import GridRow from '../gridRow/GridRow'

const MainGrid = () => {

    const [state, setState] = useState({
        pokemon: []
    })

    useEffect(() => { 
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        let indexEndpoint = "http://localhost:3001/api/pokemons?per_page=50"
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
        }
        const resp = await fetch(indexEndpoint, config)
        const data = await resp.json()
        setState(prevState => {
            return {
                ...prevState,
                pokemon: data.results
            }
        })
    }

    const renderRow = (rowNum = 1) => {
        return state.pokemon?.map(pokemon => { 
            return (
                <GridRow pokemon={pokemon} />
            )
        })
    }

    return (
        <div id='main-grid'>
            {renderRow()}
        </div>
    )
}

export default MainGrid