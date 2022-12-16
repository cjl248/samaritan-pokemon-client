import { useState } from 'react'
import './Home.scss'
import Header from '../Header/Header'
import MainGrid from '../mainGrid/MainGrid'

const Home = () => { 
    return (
        <div id="home">
            <Header />
            <MainGrid />
        </div>
    )
}

export default Home