import React, { Component } from 'react'; 
import './Cell.css';
 
class Cell extends Component {
  render( ) {
    var cellType= {
      normal:"cell ",
      snake:" cell cell-snake",
      fruit:" cell cell-fruit"
    };
    
    return (

      <div className={cellType[this.props.type]}   >

     {/* {this.props.xvalue}|{this.props.yvalue} */}
      </div>
    );
  }
}

export default Cell;
