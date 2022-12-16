import { useState } from 'react'
import './PillButton.scss'

const PillButton = () => { 
    return (
        <div id='pill-button'>
            <table id='pokemon-table'>
                <thead id='pokemon-header'> 
                    <tr id='pokemon-header-row'>
                        <th id='pokeball-img'></th>
                        <th id='pokball-text'>Add New Pokemon</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default PillButton