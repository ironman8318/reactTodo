import React,{useState,Fragment} from "react";
import styled from "styled-components";

const StyledColorPallete = styled.div`
    padding: 2rem;
    top: 3.9rem;
    position: absolute;
    background: rgba(170, 170, 170, 0.4);
    width: 100%;

    display: ${({show}) =>show?"flex":"none" };
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

 p{
    position: absolute;
    color: var(--theme-color);
    top: .6rem;
    right: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: all .5s;
}
span {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background: green;
    margin: .5rem 0;
    border-radius: 5px;
    border: 1px solid black;
}


`
function Pallete(){
    const [show,showPallete] = useState(false);
    
    const themeButtons= document.querySelectorAll(".colorPallete span").forEach(el => {
        el.addEventListener("click",e => {
            const themeColor = e.target.style.background;
            localStorage.setItem("themeColor",themeColor);
            document.documentElement.style.setProperty("--theme-color",themeColor);
        });
    })
    
    return(
        <Fragment>
        <button onClick={showPallete.bind(null,true)}>Theme</button>
        <StyledColorPallete show={show} className="colorPallete">
        
            <p onClick={showPallete.bind(null,false)}>X</p>
            <span style={{background:"red"}}></span>
            <span style={{background:"yellow"}}></span>
            <span style={{background:"pink"}}></span>
            <span style={{background:"steelblue"}}></span>
            <span style={{background:"black"}}></span>
            <span style={{background:"green"}}></span>
        </StyledColorPallete>
</Fragment>
        
    
    )
}

export default Pallete;