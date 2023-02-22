// use shortcut = type in "rcc" and hit enter on first one to get boilerplate up
// object destructuring --> 

import React, { Component } from 'react'
import { nanoid } from 'nanoid';


export default class Todos extends Component {
    constructor(props){
    super(props);

    this.state= {
        isClicked: false,
        todos: [],
        text: "",

    }
    };

    handleClick = ()=> {
        // console.log("clicked", this.state.isClicked)
        this.setState({
            // isClicked: !this.state.isClicked
            todos: [...this.state.todos, {id: nanoid(), text: this.state.text}],
            //copy original array and then add whatever is inputted, so that the OG array isn't mutated
            text:""
            // delete user's input from the input bar
        })
    }

    handleDelete =(id) => {
      
//find item by id to get its index
      const index = this.state.todos.findIndex(todo => todo.id ===id) 

      // create copy of state so we don't mutate directly
      const copy = [...this.state.todos]
      
      //mutate the copy
      copy.splice(index, 1);
      
      //set the state
      this.setState({
        todos: copy
      })
    }
  // any time state changes, everything in render will run
    render() {
    return (
      <div>
        {/* <h2>{this.state.text}</h2> */}

    
        <input onChange={(event)=> this.setState({
            text: event.target.value})} 
            // event is the onChange object occurring that has target on it as an object, and value is a property of the target object (if console.log(event) you can see)
            value={this.state.text}
        />
        <button onClick={this.handleClick}>Add ToDo</button>
        <ul>
        {this.state.todos.map((todo)=>{
                return (
                    <li className="list-item" key={todo.id}>
                    <h4>{todo.text}</h4>
                    <button id="delete-button" onClick={()=> this.handleDelete(todo.id)}>X</button>
                    </li>
                )
            })}
            </ul>
        
      </div>
    );
  }
}

