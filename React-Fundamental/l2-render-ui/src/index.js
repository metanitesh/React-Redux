import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class MyElement extends React.Component{

  render(){
    return (
      <div>
        Hello world
      </div>
    )
  }
}

const people = ['nitesh', "akhil", "some"]
// const all = people.map((name) => {
//   return name + "some"
// })

// console.log(all)



const element = <ol>
  
    {people.map ( name => <li>{name}</li> )}
    
  </ol>

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
