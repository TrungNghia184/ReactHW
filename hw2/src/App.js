
import './App.css';
import { Component } from 'react';
import Component3 from './Components/Component1'
import NewTask from './Components/NewTask'
import ReactDOM from 'react-dom'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowButtonCounter : 0,
      date: new Date(),
    };
  }
  showCreateTask = () => {
    return (
      ReactDOM.render(<Component3/>, document.getElementById('container-left'))
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div id="button-container">
          <button className="nav-button" onClick={this.showCreateTask} id="btn-new-task">Add</button>
        </div>
        <div id="container">
          <div id="container-left"></div>
          <div id="container-overlay">
            <h2>Task List</h2>
            <div id="container-right">
            </div>
          </div>
        </div> 
        
      </div>
    );
  }
}

