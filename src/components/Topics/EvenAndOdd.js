import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor(){
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(val){
    this.setState({
      userInput: val
    })
    console.log(val);
  }

  assignEvenAndOdds(userInput) {
    var arr = userInput.split(',');
    var evens = [];
    var odds = [];

    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
  }

  render(){
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens & Odds </h4>
        <input onChange={ (e)=> this.handleChange(e.target.value) } className="inputLine"></input>
        <button onClick= { ()=> this.assignEvenAndOdds(this.state.userInput) } className="confirmationButton">Split it!</button>
        <span className="resultsBox">{ JSON.stringify(this.state.evenArray) }</span>
        <span className="resultsBox">{ JSON.stringify(this.state.oddArray) }</span>
      </div>
    )//whwen do we usde e

    //when to use this.state
  }


}

export default EvenAndOdd;
