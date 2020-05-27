import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation';


// const value1 = Math.floor(Math.random() * 100);
// const value2 = Math.floor(Math.random() * 100);
// const value3 = Math.floor(Math.random() * 100);
// const realAnswer = value1 + value2 + value3;
// const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state =  {
    numQuestions: 0,
    numCorrect: 0
  }

  updateScore(result){
    console.log(result)
    console.log(this)
    if(result){
      this.setState( (prev) => ({
        numCorrect : prev.numCorrect + 1
      }))
    }

    this.setState(prev => ({numQuestions: prev.numQuestions+1}))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header> 
        
        {/* <Answer />
        <Score /> */}
        <div className="game">
          <h2>Mental Math</h2>
          <Equation updateScore={this.updateScore} />
          
          
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
