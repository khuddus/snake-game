import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';
 
class App extends Component {
  render() {
    var boardContent=[];
    // var td=<td ><Cell/></td>;
    for(var i=0;i<30;i++){
      var row=[];
      for(var j=0;j<50;j++){
        row.push(<td ><Cell/></td>) ;
      }
      boardContent.push(<tr>{row}</tr>);
    }
        //  board=<table className="board">+boardContent+</table>;
    return (
      <div className="App">
       
       <table className="board">
       {boardContent}
       </table>
         
      </div>
    );
  }
}

export default App;
