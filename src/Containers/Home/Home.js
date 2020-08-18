import React, { Component, Fragment } from "react";
import Todo from "../../Components/Todo/Todo";
import FilterGroup from "../../Components/FilterGroup/FilterGroup";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import styled from "styled-components";


const StyledContainer = styled.main`

    width:60%;
    padding:2rem;
    border:5px solid var(--theme-color);
    margin:5rem auto;
    transition:all .5s;

`

class Home extends Component {
    state = {
        filter :"All",
    };

    addTodoHandler = (todo) => {
        const newTodoList = [...this.state.todoList];
        if(todo.id){
            const index = newTodoList.findIndex(el => el.id === todo.id);
            newTodoList[index] = todo;
        }else{
            todo.id = Math.random();
            newTodoList.push(todo);    
        }
        this.setState({todoList  : newTodoList});
    }
    
    deleteTodoHandler = (id) => {
        this.props.deleteTodo(id);
    } 
    
    editTodoHandler = (id) => {
        this.props.setEditData(id);
        this.props.history.push("/edit");
    }
    
    setFilterHandler = (fil) => {
        this.setState({filter:  fil});
        
    }

    render() {
        let renderingTodo;
        if(this.state.filter === "All") renderingTodo = [...this.props.todos];
        else {
            renderingTodo = this.props.todos.filter(el => el.label === this.state.filter)
        }
        
        let todos = renderingTodo.map(el => {
            if(el.label===this.state.filter || this.state.filter==="All"){
                return (<Todo title={el.title} description={el.description} id={el.id} key={el.id}       label={el.label} deleteTodoHandler={this.deleteTodoHandler} editTodoHandler=       {this.editTodoHandler}/> 
                )    
            }   
        })
        if(todos.length === 0 ||!todos[0]) todos = <h2 style={{textAlign:"center",fontSize:"1.8rem",color:"var(--theme-color)"}}>You have not added anything yet :/</h2>
        return (
            <Fragment >
            <FilterGroup setFilterHandler={this.setFilterHandler}/>
                 <StyledContainer>
                {todos}
            </StyledContainer>
            </Fragment>
        );
    }
}

                                           
const mapStateToProps = (state) => {
    return{
        todos : state.todos,
        editData : state.editTodoData,
        editing : state.editTodoData?true:false,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo : (id) => {dispatch(actions.deleteTodo(id))},
        editTodo : (id) => {dispatch(actions.editTodo(id))},
        setEditData : (id) => {dispatch(actions.setEditData(id))}
    }
}
        
        
export default connect(mapStateToProps,mapDispatchToProps)(Home);
