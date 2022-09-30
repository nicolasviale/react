import React from "react";
import styled from "styled-components";
import logo from "../logo-one-piece.png"

function Navbar(){
    return(
        <>
        <Navcontainer>
        <img className="logo" src={logo}  />
        <div>
            <a href="">Home</a>
            <a href="">Mangas</a>
            <a href="">Donde Encontrarnos</a>
        </div>
        </Navcontainer>
        </>
    )
}

export default Navbar

const Navcontainer = styled.nav`
`

 

