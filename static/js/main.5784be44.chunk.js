(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a.n(s),n=a(8),r=a.n(n),h=(a(15),a(3)),o=a(5),c=a(4),l=a(2),u=a(6),m=a(1),v=(a(17),a(19),function(t){function e(){return Object(h.a)(this,e),Object(o.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:{normal:"cell ",snake:" cell cell-snake",fruit:" cell cell-fruit"}[this.props.type]})}}]),e}(s.Component)),d=function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(o.a)(this,Object(c.a)(e).call(this,t))).setDirection=a.setDirection.bind(Object(m.a)(Object(m.a)(a))),a.initiate=a.initiate.bind(Object(m.a)(Object(m.a)(a))),a.startGame=a.startGame.bind(Object(m.a)(Object(m.a)(a))),a.restartGame=a.restartGame.bind(Object(m.a)(Object(m.a)(a))),a.initiate(),a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"initiate",value:function(){var t=[parseInt(30*Math.random()),parseInt(30*Math.random())];this.state={timerCount:0,width:30,height:30,snake:[],cells:[],fruit:t,direction:39,score:0,timegap:300,moveSnakeInterval:null,isRunning:!1,highestScore:0};for(var e=0;e<30;e++){this.state.cells[e]=[];for(var a=0;a<30;a++)this.state.cells[e][a]="normal"}this.state.snake.push([5,5]);var s=this.state.cells.slice();s[this.state.fruit[0]][this.state.fruit[1]]="fruit",this.state.cells=s}}]),Object(l.a)(e,[{key:"moveSnake",value:function(){var t=[],e=this.state.snake[0].slice(),a=0;39==this.state.direction?e[1]=(this.state.width+e[1]+1)%this.state.width:37==this.state.direction?e[1]=(this.state.width+e[1]-1)%this.state.width:40==this.state.direction?e[0]=(this.state.height+e[0]+1)%this.state.height:38==this.state.direction&&(e[0]=(this.state.height+e[0]-1)%this.state.height);for(var s=0;s<this.state.snake.length;s++)e[0]==this.state.snake[s][0]&&e[1]==this.state.snake[s][1]&&(alert("Game over"),this.state.moveSnakeInterval&&clearInterval(this.state.moveSnakeInterval));var i=this.state.score,n=this.state.highestScore;e[0]==this.state.fruit[0]&&e[1]==this.state.fruit[1]&&(a++,++i%5&&this.speedUpGame(20),i>n&&(n=i)),t.push(e);for(s=0;s<this.state.snake.length-1+a;s++)t.push(this.state.snake[s]);var r=this.state.fruit.slice();if(1==a){var h=parseInt(Math.random()*this.state.height),o=parseInt(Math.random()*this.state.width);r=[h,o]}this.setState(function(e){return{timerCount:e.timerCount+1,snake:t,fruit:r,score:i,highestScore:n}})}},{key:"restartGame",value:function(){for(var t=[parseInt(Math.random()*this.state.height),parseInt(Math.random()*this.state.width)],e=[],a=0;a<this.state.height;a++){e[a]=[];for(var s=0;s<this.state.width;s++)e[a][s]="normal"}var i=[];i.push([5,5]);var n=this.state.cells.slice();n[t[0]][t[1]]="fruit",e=n,this.setState({timerCount:0,snake:i,cells:e,fruit:t,direction:39,score:0,timegap:300,moveSnakeInterval:null,isRunning:!1}),this.startGame()}},{key:"speedUpGame",value:function(t){var e=this;if(this.state.timegap-t>30){var a=this.state.timegap-t;this.state.moveSnakeInterval&&clearInterval(this.state.moveSnakeInterval);var s=setInterval(function(){return e.moveSnake()},a);this.setState(function(t){return{timegap:a,isRunning:!0,moveSnakeInterval:s}})}}},{key:"startGame",value:function(){var t=this;this.state.moveSnakeInterval&&clearInterval(this.state.moveSnakeInterval);var e=setInterval(function(){return t.moveSnake()},this.state.timegap);this.setState(function(t){return{isRunning:!0,moveSnakeInterval:e}})}},{key:"setDirection",value:function(t){var e=this,a=t.keyCode,s=!0;[[38,40],[37,39]].forEach(function(t){t.indexOf(e.state.direction)>-1&&t.indexOf(a)>-1&&(s=!1)}),s&&this.setState({direction:a})}},{key:"render",value:function(){var t=[],e=0,a=this.state.cells.slice(),s=this.state.fruit.slice();a.forEach(function(t){t.fill("normal")}),this.state.snake.forEach(function(t){a[t[0]][t[1]]="snake"}),a[s[0]][s[1]]="fruit";for(var n=0;n<this.state.height;n++){for(var r=[],h=0;h<this.state.width;h++)r.push(i.a.createElement("div",{key:e},i.a.createElement(v,{value:e++,xvalue:n,yvalue:h,type:a[n][h]})));t.push(i.a.createElement("div",{className:"columnsContainer",key:n},r))}return i.a.createElement("div",{className:"App",onKeyDown:this.setDirection,tabIndex:"0"},i.a.createElement("h1",null," Our snake is hungry and sad? "),i.a.createElement("h2",null,"Sad because it's blind, and can't reach eggs. Help it reach eggs and nurture it. "),i.a.createElement("h5",null,"(Secret! Arrows of your keyboard help it move after you start your game)"),i.a.createElement("p",null,"Score : ",this.state.score),i.a.createElement("p",null,"Highest Score : ",this.state.highestScore),i.a.createElement("div",{className:"board"},i.a.createElement("div",{className:"rowsContainer"},t)),i.a.createElement("button",{disabled:!this.state.isRunning,onClick:this.restartGame},"Restart"),i.a.createElement("button",{disabled:this.state.isRunning,onClick:this.startGame},"Start"))}}]),e}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.5784be44.chunk.js.map