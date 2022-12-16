import { useState } from "react";
import PokemonCard from "../pokemonCard/PokemonCard";

const GridRow = ({ pokemon }) => {

    const classList = 'grid-row'

    const renderPokemonCards = () => pokemon.map(() => { return <PokemonCard pokemon={pokemon} /> })

    return (
        <div className={classList}>
            {renderPokemonCards()}
        </div>
    )
}

export default GridRow