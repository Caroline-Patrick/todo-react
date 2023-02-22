// use shortcut = type in "rcc" and hit enter on first one to get boilerplate up
// object destructuring --> 

import React, { Component } from 'react'

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
            todos: [...this.state.todos, this.state.text],
            //copy original array and then add whatever is inputted, so that the OG array isn't mutated
            text:""
            
        })
    }
  // any time state changes, everything in render will run
    render() {
    return (
      <div>
        {/* <h2>{this.state.text}</h2> */}

    
        <input onChange={(event)=> this.setState({
            text: event.target.value})} 
            value={this.state.text}
        />
        <button onClick={this.handleClick}>Add ToDo</button>
        {
            this.state.todos.map((todo, index)=>{
                return (
                    <h2>{todo}</h2>
                )
            })
        }
      </div>
    );
  }
}

