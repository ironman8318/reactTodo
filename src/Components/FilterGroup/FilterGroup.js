import React from "react";
import styled from "styled-components";

const StyledFilterGroup = styled.div`

    display: flex;
    justify-content: center;
    margin: 2rem auto;

div:hover {
    background: yellow;
    border-radius: 5px;
}
div {
    margin-right: 2rem;
    padding: 0.2rem 1rem;
    color: green;
    border-bottom: 1px solid green;
    cursor: pointer;
    transition: all .5s;
}

`


const FilterGroup = (props) => {
    return (<StyledFilterGroup>
            
            <div onClick={() => {props.setFilterHandler("All")}}>All</div>
            <div onClick={() => {props.setFilterHandler("Home")}}>Home</div>
            <div onClick={() => {props.setFilterHandler("Work")}}>Work</div>
            <div onClick={() => {props.setFilterHandler("General")}}>General</div>
            
            </StyledFilterGroup>
           )
}
            
export default FilterGroup;            