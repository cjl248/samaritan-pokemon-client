import { useState } from "react";

const PokemonCard = ({ pokemon }) => {

    const classList = 'pokemon-card'

    return (
        <div className={classList}>
            {pokemon.name}
        </div>
    )
}

export default PokemonCard