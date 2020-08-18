import React, { Component } from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    padding: 2rem;
    background: white;
    width:40%;
    min-width:30rem;
    margin: 5rem auto;

    input,select {
        padding: 0.5rem 2rem;
        margin-bottom: 2rem;
        border-radius: 3px;
        font-size: 1.6rem;
        border: 2px solid var(--theme-color);
        outline: none;
        transition:all .5s;
    }
    button {
        outline: none;
        border: 2px solid blue;
        font-size: 1.4rem;
        color: blue;
        margin-right: 2rem;
        background: orange;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
`;
class Form extends Component {
    state = {
        title: this.props.editing?this.props.editData.title:"",
        description:this.props.editing?this.props.editData.description:"",
        label : this.props.editing?this.props.editData.label:"Work",
        id :  this.props.editing?this.props.editData.id:Math.random(),
    };

    titleChangeHandler = event => {
        this.setState({ title: event.target.value });
    };

    descriptionChangeHandler = event => {
        this.setState({ description: event.target.value });
    };

    labelChangeHandler = event => {
        this.setState({label: event.target.value });
    }

    onSubmitHandler = event => {
        event.preventDefault();
        const todo = {
            title: this.state.title,
            description: this.state.description,
            label :this.state.label,
            id :this.state.id,
        };
        this.setState({ title: "", description: "" ,label: "Work"});
        if(this.props.editing){
            this.props.editTodo(todo)    
        }else{
            this.props.addTodo(todo);    
        }
        this.props.history.replace("/")
    };

    closeFormHandler = event => {
        event.preventDefault();
        this.props.closeAddFormHandler();
    };

    render() {
        return (
            <StyledForm action="">
                <input
                    type="text"
                    onChange={this.titleChangeHandler}
                    placeholder="Title"
                    value={this.state.title}
                />
                <input
                    type="text"
                    onChange={this.descriptionChangeHandler}
                    placeholder="Description"
                    value={this.state.description}
                />
                <select onChange={this.labelChangeHandler} value={this.state.label}>
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
                    <option value="General">General</option>
                </select>
                <div>
                    <button onClick={this.onSubmitHandler}>{this.props.editing?"Edit":"Add"}</button>
                    <button onClick={this.closeFormHandler}>Cancel</button>
                </div>
            </StyledForm>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editData : state.editTodoData,
        editing : state.editTodoData ? true:false,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: todo => {dispatch(actions.addTodo(todo))},
        editTodo :todo => {dispatch(actions.editTodo(todo))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
