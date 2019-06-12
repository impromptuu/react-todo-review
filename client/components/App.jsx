import React from 'react';
import List from './List.jsx'
import AddListEntry from './AddListEntry.jsx'

// var App = () => {
//   return( 
//     <div id="mainApp" className="center vertical">
//       <div className="title">Hello Where would you like to travel??</div>
//       <List todos={state.todos} />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Home', 'Casa', 'Book Palace', 'A fourth option']
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(index) {
    console.log('deleting clicked list item');
    var currentTodos = [...this.state.todos];
    currentTodos.splice(index,1);
    this.setState({
      todos: currentTodos
    })
  }

  addItem(item) {
    console.log('submit item:', item);
    var currentTodos = [...this.state.todos];
    currentTodos.push(item);
    this.setState({
      todos: currentTodos
    })
  }

  render() {
    return ( 
      <div id="mainApp" className="center vertical">
        <div className="title">Hello Where would you like to travel??</div>
        <AddListEntry addItem={this.addItem} />
        <List todos={this.state.todos} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;