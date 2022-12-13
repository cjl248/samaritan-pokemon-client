import { useState } from 'react'
import './Logo.scss'

const Logo = () => {
    const imageURL = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6c904543-5c85-4e2a-8b5b-88174d0789bf/Pokedex_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221213T150516Z&X-Amz-Expires=86400&X-Amz-Signature=bf46e7117b2de942161c8df60e83e1604485b3a4986df9e21c29cf912a59909e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Poke%25CC%2581dex_logo.png%22&x-id=GetObject"
    return (
        <img src={imageURL}></img>
    )
}

export default Logo