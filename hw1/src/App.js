import './App.css';
import ReactDOM from 'react-dom'
import { FaFacebookSquare } from 'react-icons/fa';

function App() {
  const handleClickHome = () => {
    ReactDOM.render(home, document.getElementById("container-left"));
  }
  const handleClickAboutMe = () => {
    ReactDOM.render(aboutMe, document.getElementById("container-left"));
  }
  const handleClickContact = () => {
    ReactDOM.render(contact, document.getElementById("container-left"));
  }
  const home = (
    <div>
      <h2>Hi! I'm Nghia</h2>
      <p>This is me pretending to play the guitar</p>   
      <img src="https://lh3.googleusercontent.com/9dxNII7qKxKTgB8vYcJcqCj6CoMqIv955z11aqcB71QWiKW4Z1b46myvm-pc-89AlBaYwupu1U5n-nPoM7xianfLBwtUghpPKZWcOh4leYNjeMOYnSrFHXnZoOot5GJTmzzsxNljkQ=w2400"></img>
    </div>
  )
  const aboutMe = (
    <div>
      <h2>It's ME again!</h2>
      <p>Let's get to know a little</p>
      <ul>
        <li>I'm now 25</li>
        <li>I'm a fresh out of the water Frontend Dev</li>
        <li>My English are above average</li>
        <li>I studied at BK university in Electrical and Electronic Engineering major but...</li>
        <li>I'm currently studying web development at Fsoft</li>
      </ul>
    </div>
  );
  const contact = (
    <div>
      <h2>You can reach me at</h2>
      <p>Number: xxx006900xxx</p>
      <p>Email: trunghia199x@gmail.com</p>
      <p><a href="https://www.facebook.com/nt.nghhia"><FaFacebookSquare className='icons' />Facebook</a></p>
    </div>
  )
  return (
    <div className="App">
      <div id="left-panel">
        <div id="container-left">
          <h1>Welcome to my personal page!</h1>
        </div>
      </div>
      <div id="right-panel">
        
        <nav className="App-nav">
            <button className="App-button" onClick={handleClickHome}>Home</button>
            <button className="App-button" onClick={handleClickAboutMe}>About me</button>
            <button className="App-button" onClick={handleClickContact}>Contact</button>
        </nav>    
      </div>
    </div>
  );
}

export default App;
