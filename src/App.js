import React, { Component } from 'react';
import TodoItem from './components/todoItem/todoItem';
import AddItem from './components/AddItem/addItem';

class App extends Component {
  state = {
    items:[
      {id:1,name:'karrar',age:23},
      {id:2,name:'ali',age:24},
      {id:3,name:'ahmed',age:25},
    ]
  }
  deleteItem = (id) =>{
    let items = this.state.items.filter(item =>{
      return item.id !== id;
    })
    this.setState({
      items:items
    })
  }
  addItem = (item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({
      items
    });
  }

  render(){
    return (
      <div className="App container">
        <h1 className="text-center">Todo App</h1>
       <TodoItem items={this.state.items} deleteItem={this.deleteItem}/>
       <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
