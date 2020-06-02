import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import serializeForm from 'form-serialize'

const Page1 = (props) => {
  return (
    <div>
      <span > page1 </span>
      <Link to="/page2" >
        go to page 2
      </Link>
      <form onSubmit={(event) => {
        event.preventDefault();
        const data = serializeForm(event.target)
        console.log(data);
        alert("hello")
      }}> 
      <input name="firstname" />
      <input name="lastname" />
      <input type="submit" value="submit" />
      </form>
    </div>
  )
}

const Page2 = (props) => {
  return (
    <div>page 2
    <Link to="/page1" >
    go to page 1
    </Link>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Route exact path="/page1" render={() => (  <Page1 /> ) } />
      <Route exact path="/page2" component={Page2} />
    </div>
  );
}

export default App;
