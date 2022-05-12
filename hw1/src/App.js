import './App.css';
import ReactDOM from 'react-dom'
import { Component } from 'react';
import Home from './Home';
import AboutMe from './AboutMe'
import Contact from './Contact';
import ImageHolder from './ImageHolder';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowButtonCounter : 0,
    };
  }
  increaseArrowButtonCounter = () => {
    if(this.state.arrowButtonCounter === 3) {
      this.setState({
        arrowButtonCounter: 0
      })
    } else {
      this.setState({
        arrowButtonCounter: this.state.arrowButtonCounter + 1,
      })
    }
    console.log(this.state.arrowButtonCounter)
  }
  decreaseArrowButtonCounter = () => {
    if(this.state.arrowButtonCounter === 0) {
      this.setState({
        arrowButtonCounter: 3,
      })
    } else {
      this.setState({
        arrowButtonCounter: this.state.arrowButtonCounter -1,
      })
    }
    console.log(this.state.arrowButtonCounter)
  }
  render() {
  return (
    <div className="App">
      <div id="left-panel">
        <div id="container-left">
          <h1>Welcome to my personal page!</h1>
          <p>Are you looking for</p>
          <div id="button-container">
            <button className='arrow-button' onClick={this.decreaseArrowButtonCounter}>&larr;</button>
            <button className='arrow-button' onClick={this.increaseArrowButtonCounter}>&rarr;</button>
          </div>
          <ImageHolder
            imageNumber = {this.state.arrowButtonCounter}
          />
        </div>
      </div>
      <div id="right-panel">
        <nav className="App-nav">
            <button className="App-button" onClick={() => {ReactDOM.render(<Home/>, document.getElementById("container-left"))}}>Home</button>
            <button className="App-button" onClick={() => {ReactDOM.render(<AboutMe/>, document.getElementById("container-left"))}}>About me</button>
            <button className="App-button" onClick={() => {ReactDOM.render(<Contact/>, document.getElementById("container-left"))}}>Contact</button>
        </nav>    
      </div>
    </div>
  );
}
}
