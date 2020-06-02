import React, { Component } from 'react';


const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const realAnswer = value1 + value2 + value3;
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;


class Equation extends Component {

  state =  {
    value1: value1,
    value2: value2,
    value3: value3,
    realAnswer: realAnswer,
    proposedAnswer: proposedAnswer
  }

  generateRandomValue (){
    return Math.floor(Math.random() * 100);
  }

  updateScore (userAnswer){
    const systemAnswer = (this.state.realAnswer === this.state.proposedAnswer)
    const result = (userAnswer === systemAnswer)
    console.log(result)
    
    this.props.updateScore(result);
    
  }


  resetGame(){
    const value1 = this.generateRandomValue();
    const value2 = this.generateRandomValue();
    const value3 = this.generateRandomValue();
    const realAnswer = value1 + value2 + value3;
    const proposedAnswer =  Math.floor(Math.random() * 3) + value1 + value2 + value3;
    this.setState({
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: proposedAnswer,
      realAnswer :realAnswer
    })
  }


  render() {
    return (
      <div>
        <div className="equation">
          
 <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
            <p className="text">{this.state.realAnswer}</p> 
          </div>
          <button onClick={() => {this.updateScore(true); this.resetGame()}}>True</button>
          <button onClick={() => {this.updateScore(false); this.resetGame()}}>False</button>
      </div>
    );
  }
}

export default Equation;