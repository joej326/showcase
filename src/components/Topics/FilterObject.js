import React, { Component } from 'react';

class FilterObject extends Component {
  constructor(){
    super();

    this.state = {
      array: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredArray: [],
    }
  }

  userInput(val){
    this.setState({
      userInput: val
    })
  }

  solveMyProblem(val){
    var array = this.state.array;
    var filteredArray = [];

    for ( var i = 0; i < array.length; i++ ) {
      if ( array[i].hasOwnProperty(val) ) {
        filteredArray.push(array[i]);
        console.log(filteredArray)
      }
    }
    this.setState({
      filteredArray: filteredArray
    })
  }


  render(){
    return (
      <div className="puzzleBox filterObjectPB">
      <h4>Filter, That, Object</h4>
      <span className="puzzleText"></span>
      <input onChange={ (e)=>this.userInput(e.target.value) } className="inputLine"></input>
      <button onClick={ ()=>this.solveMyProblem(this.state.userInput) } className="confirmationButton">filter</button>
      <span className="resultsBox filterObjectRB">filtered: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
    )
  }


}

export default FilterObject;
