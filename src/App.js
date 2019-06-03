import React, { Component } from 'react';
import './App.css';
import Cell from './Cell';

class App extends Component {
  initiate() {
    const defaultheight = 30;
    const defaultwidth = 30;

    const x = parseInt(Math.random() * defaultheight);
    const y = parseInt(Math.random() * defaultwidth);
    var newFruit = [x, y];

    this.state = {
      timerCount: 0,
      width: defaultwidth,
      height: defaultheight,
      snake: [],
      cells: [],
      fruit: newFruit,
      direction: 39,
      score: 0,
      timegap: 300,
      moveSnakeInterval: null,
      isRunning: false,
      highestScore:0
    };
    for (var i = 0; i < defaultheight; i++) {
      this.state.cells[i] = [];
      for (var j = 0; j < defaultwidth; j++)
        this.state.cells[i][j] = "normal";
    }

    this.state.snake.push([5, 5])

    // console.log(this.state.cells);
    var newCells = this.state.cells.slice();
    newCells[this.state.fruit[0]][this.state.fruit[1]] = "fruit";
    this.state.cells = newCells;

    //  this.startGame();
  }
  constructor(props) {
    super(props);


    this.setDirection = this.setDirection.bind(this);
    this.initiate = this.initiate.bind(this);
    this.startGame = this.startGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.initiate();
  }
  moveSnake() {
    var newSnake = [];
    var nextHead = this.state.snake[0].slice();
    var fruitValue = 0;

    if (this.state.direction == 39)//right
      nextHead[1] = (this.state.width + nextHead[1] + 1) % this.state.width;
    else if (this.state.direction == 37)//left
      nextHead[1] = (this.state.width + nextHead[1] - 1) % this.state.width;
    else if (this.state.direction == 40)//down
      nextHead[0] = (this.state.height + nextHead[0] + 1) % this.state.height;
    else if (this.state.direction == 38)//up
      nextHead[0] = (this.state.height + nextHead[0] - 1) % this.state.height;
    //if snake eat itself
    for (var i = 0; i < this.state.snake.length; i++) {
      if (nextHead[0] == this.state.snake[i][0] && nextHead[1] == this.state.snake[i][1]) {
        alert("Game over");
        if (this.state.moveSnakeInterval)
          clearInterval(this.state.moveSnakeInterval);
      }
    }
    var newScore = this.state.score;
    var newHighestScore = this.state.highestScore;
    //if snake faces fruit
    if (nextHead[0] == this.state.fruit[0] && nextHead[1] == this.state.fruit[1]) {
      fruitValue++;
      newScore++;
      if(newScore%5)this.speedUpGame(20);
      if(newScore>newHighestScore)
      newHighestScore=newScore;
      
    }
    newSnake.push(nextHead);
    for (var i = 0; i < this.state.snake.length - 1 + fruitValue; i++) {
      newSnake.push(this.state.snake[i]);
    }
    var newFruit = this.state.fruit.slice();
    if (fruitValue == 1) {
      const x = parseInt(Math.random() * this.state.height);
      const y = parseInt(Math.random() * this.state.width);
      newFruit = [x, y];
    }
    this.setState(previousState => (
      {
        timerCount: previousState.timerCount + 1,
        snake: newSnake,
        fruit: newFruit,
        score: newScore,
        highestScore: newHighestScore
      }
    ))
    // console.log(this.state.snake);
  };
  restartGame() {
    

    const x = parseInt(Math.random() * this.state.height);
    const y = parseInt(Math.random() * this.state.width);
    var newFruit = [x, y];
    var newCells=[];
    for (var i = 0; i < this.state.height; i++) {
      newCells[i] = [];
      for (var j = 0; j < this.state.width; j++)
        newCells[i][j] = "normal";
    }
var newSnake=[];
    newSnake.push([5, 5])

    // console.log(this.state.cells);
    var newCells2 = this.state.cells.slice();
    newCells2[newFruit[0]][newFruit[1]] = "fruit";
    newCells = newCells2;
    this.setState ( {
      timerCount: 0,
        snake: newSnake,
      cells: newCells,
      fruit: newFruit,
      direction: 39,
      score: 0,
      timegap: 300,
      moveSnakeInterval: null,
      isRunning: false

    });
 

this.startGame();
  }

  speedUpGame(speedDifference) {
    if(this.state.timegap-speedDifference > 30){ 
      var newTimeGap=this.state.timegap-speedDifference;
    if (this.state.moveSnakeInterval)
      clearInterval(this.state.moveSnakeInterval);
    var newMoveSnakeInterval = setInterval(() => (

      this.moveSnake()
    ), newTimeGap);
    this.setState(previousState => (
      {
        timegap:newTimeGap,
        isRunning: true,
        moveSnakeInterval: newMoveSnakeInterval
      }
    ));
    }
  }
  startGame() {
    if (this.state.moveSnakeInterval)
      clearInterval(this.state.moveSnakeInterval);
    var newMoveSnakeInterval = setInterval(() => (

      this.moveSnake()
    ), this.state.timegap);
    this.setState(previousState => (
      {
        isRunning: true,
        moveSnakeInterval: newMoveSnakeInterval
      }
    ));
  }
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
    var fruit = this.state.fruit.slice();
    currentCells.forEach(singleCell => {
      singleCell.fill("normal");
    });
    this.state.snake.forEach(currentSnake => {
      currentCells[currentSnake[0]][currentSnake[1]] = "snake";
    });
    currentCells[fruit[0]][fruit[1]] = "fruit";
    for (var i = 0; i < this.state.height; i++) {
      var row = [];
      for (var j = 0; j < this.state.width; j++) {
        row.push(<div key={count}  ><Cell value={count++} xvalue={i} yvalue={j} type={currentCells[i][j]} /></div>);
      }
      boardContent.push(<div className="columnsContainer" key={i}>{row}</div>);
    }



    return (
      <div className="App" onKeyDown={this.setDirection} tabIndex="0"  >
        <p>Score : {this.state.score}</p><p>Highest Score : {this.state.highestScore}</p>
        <div className="board" >
          < div className="rowsContainer">
            {boardContent}
          </div>
        </div>
        <button disabled={!this.state.isRunning} onClick={this.restartGame}>Restart</button>
        <button disabled={this.state.isRunning} onClick={this.startGame}>Start</button>
      </div>
    );
  }
}

export default App;
