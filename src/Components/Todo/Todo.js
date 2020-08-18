import React from "react";
import styled,{css} from "styled-components";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
const StyledTodo = styled.div`
    position:relative;
    overflow:hidden;
    padding: 2rem;
    box-shadow: 0 0.5rem 0.7rem rgba(0, 0, 0, 0.2);
    max-width: 50rem;
    text-align: center;
    margin: 2rem auto;

.todo__heading {
    font-size: 2.2rem;
    color: green;
}

.todo__buttons{
    display: flex;
    justify-content: center;

}
.todo__buttons button {
    font-size: 1.3rem;
    display: inline-block;
    padding:.5rem 1rem;
    ${({label}) => label==="General"&&css`background:red;`}
    ${({label}) => label==="Home" &&css`background:orange;`}
    ${({label}) => label==="Work" &&css`background:blue;`}
    outline:none;
    border:none;
    color: white;

}


.todo__buttons button:not(:last-child){
    margin-right: 1rem;
}

.label {
    display: inline-block;
    position: absolute;
    top: 0%;
    right: 0%;
    transform: rotateZ(45deg) translateX(25%) translateY(-45%);
    transform-origin: center;
    color: white;
    background: orange;
    padding: 0.2rem 3rem;
}
.label--work {
    background: blue;
}

.label--home {
    background: orange;
}
.label--general {
    background: red;
}

`

const todo = props => {
    const labelClass = ["label"];
    if (props.label == "General") {
        labelClass.push("label--general");
//        buttonClass = "btn--general";
    }
    if (props.label == "Home") {
        labelClass.push("label--home");
//        buttonClass = "btn--home";
    }
    if (props.label == "Work") {
        labelClass.push("label--work");
//        buttonClass = "btn--work";
    }
    
    return (
        <StyledTodo label={props.label}>
            <h3 className="todo__heading">{props.title}</h3>
            <p className="todo__description">{props.description}</p>
            <span className={labelClass.join(' ')}>{props.label}</span>
            <div className="todo__buttons">
                <button onClick={props.editTodoHandler.bind(null,props.id)}>Edit</button>
                <button onClick={props.deleteTodoHandler.bind(null,props.id)}>Delete</button>
            </div>
        </StyledTodo>
    );
};

export default todo;
