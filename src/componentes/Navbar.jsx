import React from "react";
import styled from "styled-components";
import logo from "../logo-one-piece.png"

function Navbar(){
    return(
        <>
        <Navcontainer>
        <img className="logo" src={logo}  />
        </Navcontainer>
        </>
    )
}

export default Navbar

const Navcontainer = styled.nav`

`