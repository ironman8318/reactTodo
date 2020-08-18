import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ColorPallete from "../ColorPallete/ColorPallete";
const StyledHeader = styled.header`

    background: var(--theme-color);
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    transition:all .5s;

.header__nav {
    display: flex;
}
.header__list {
    display: flex;
    list-style: none;
}
.header__listItem button {
    outline: none;
    border: 1px solid blue;
    font-size: 1.4rem;
    color: blue;
    margin-right: 2rem;
    background: yellow;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    cursor: pointer;

}

.header__listItem{
    position:relative;
}


`

const StyledHomeBtn = styled.button`
    outline: none;
    border: 2px solid yellow;
    font-size: 1.4rem;
    color: yellow;
    margin-right: 2rem;
    background: transparent;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    cursor: pointer;

`
const navbar = props => {
    return (
        <StyledHeader>
        <Link to="/"><StyledHomeBtn>TODOS</StyledHomeBtn></Link>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__listItem">
                        <Link to="/add"><button >Add Todo</button></Link>
                    </li>
                    <li className="header__listItem">                        
                        
                        <ColorPallete />
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
};

export default navbar;
