import { useState } from 'react'
import Logo from '../logo/Logo'
import PillButton from '../pillButton/PillButton'

const Header = () => { 
    return (
        <div id="header">
            <Logo />
            <PillButton />
        </div>
    )
}

export default Header