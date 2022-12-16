import { useState } from 'react'
import './Logo.scss'

const logoSrc = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6c904543-5c85-4e2a-8b5b-88174d0789bf/Pokedex_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221216T100845Z&X-Amz-Expires=86400&X-Amz-Signature=446b8d02672d8fc097fe1e6a583e405d1d24fd4f183929813c7d5782d84cd369&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Poke%25CC%2581dex_logo.png%22&x-id=GetObject"

const Logo = () => {
    return (
        <div id='logo'></div>
    )
}

export default Logo