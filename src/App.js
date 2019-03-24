import React, { Component } from 'react';
import './App.css';
import Cell from './Cell';

class App extends Component {
  constructor(props) {
    super(props);
    const defaultheight = 30;
    const defaultwidth = 50;
    this.state = {
      timerCount: 0,
      width: defaultwidth,
      height: defaultheight,
      snake: [],
      cells: [],
      fruit: [4, 8],
      direction: 39
      
    };
    for (var i = 0; i < defaultheight; i++) {
      this.state.cells[i] = [];
      for (var j = 0; j < defaultwidth; j++)
        this.state.cells[i][j] = "normal";
    }
    this.state.snake.push([5, 8])
    this.state.snake.push([5, 7])
    this.state.snake.push([5, 6])
    this.state.snake.push([5, 5])
    // Toggle the state every second
    this.setDirection = this.setDirection.bind(this);
   
    // console.log(this.state.cells);
    var newCells = this.state.cells.slice();
    newCells[this.state.fruit[0]][this.state.fruit[1]] = "fruit";
    this.state.cells = newCells;
    this.moveSnakeInterval = setInterval(() => (

      this.moveSnake()
    ), 500);
  }
  moveSnake() {
    var newSnake = [];
    var nextHead = this.state.snake[0].slice();
    var fruitValue=0;

    if(this.state.direction==39)//right
    nextHead[1] = (this.state.width+nextHead[1] + 1)%this.state.width;
    else if(this.state.direction==37)//left
    nextHead[1] = (this.state.width+nextHead[1] - 1)%this.state.width;
    else if(this.state.direction==40)//down
    nextHead[0] = (this.state.height+nextHead[0] + 1)%this.state.height;
    else if(this.state.direction==38)//up
    nextHead[0] = (this.state.height+nextHead[0] - 1)%this.state.height;
        //if snake eat itself
        for(var i=0;i<this.state.snake.length;i++){
          if(nextHead[0]==this.state.snake[i][0]&&nextHead[1]==this.state.snake[i][1])
          {
            if (this.moveSnakeInterval) clearInterval(this.moveSnakeInterval);
     alert("Loose");
          }
        }
        //if snake faces fruit
        if(nextHead[0]==this.state.fruit[0]&&nextHead[1]==this.state.fruit[1])
        {
          fruitValue++;
        }
    newSnake.push(nextHead);
    for (var i = 0; i < this.state.snake.length-1+fruitValue; i++) {
      newSnake.push(this.state.snake[i]);
    }
    var newFruit=this.state.fruit.slice();
    if(fruitValue==1){
      const x = parseInt(Math.random() * this.state.height);
    const y = parseInt(Math.random() * this.state.width);
    newFruit=[x,y];
    }
    this.setState(previousState => (
      {
        timerCount: previousState.timerCount + 1,
        snake: newSnake,
        fruit:newFruit
      }
    ))
    // console.log(this.state.snake);
  };
 
  setDirection({ keyCode }) {
    // if it's the same direction or simply reversing, ignore
    let changeDirection = true;
    [[38, 40], [37, 39]].forEach(dir => {
      if (dir.indexOf(this.state.direction) > -1 && dir.indexOf(keyCode) > -1) {
        changeDirection = false;
      }
    });

    if (changeDirection) this.setState({ direction: keyCode });
  }
  render() {
    //display board
    var boardContent = [];
    var count = 0;
    var currentCells = this.state.cells.slice();
    var fruit=this.state.fruit.slice();
    currentCells.forEach(singleCell => {
      singleCell.fill("normal");
    });
    this.state.snake.forEach(currentSnake => {
       currentCells[currentSnake[0]][currentSnake[1]] = "snake";
    });
    currentCells[fruit[0]][fruit[1]]="fruit";
    for (var i = 0; i < this.state.height; i++) {
      var row = [];
      for (var j = 0; j < this.state.width; j++) {
        row.push(<td key={count}  ><Cell value={count++} xvalue={i} yvalue={j} type={currentCells[i][j]} /></td>);
      }
      boardContent.push(<tr key={i}>{row}</tr>);
    }

 
    
    return (
      <div className="App"   onKeyDown={this.setDirection} tabIndex="0"  >
        <p>Timer : {this.state.timerCount}</p>
        <table className="board" >
          <tbody>
            {boardContent}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
