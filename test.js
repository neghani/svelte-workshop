// let index = 0;
// for (index; index < 100; index++) {
// 	console.log(index);
// }

// console.log('index', index);
// if (index < 0) {
// 	index++;
// }

// availability
// function aoo() {
// 	let logger = 'this is loggger';
// 	function boo() {
// 		console.log(logger);
// 	}
// 	console.log(logger);
// 	boo();
// }
//aoo();

// precedence

// function aoo() {
//     let logger;

//     function boo() {
//         logger = 'this is child logger';
//         console.log(logger);
//     }

//     boo();
//     console.log(logger);

// }
// aoo();

// constant modify

// function aoo() {
// const logger = ["this is parent logger"]

//     function boo() {
//         logger[0] ={}
//         console.log(logger);
//     }

//     boo();
//     console.log(logger);

// }
// aoo();

/*
    let nums =[1,2,3,4,5,6]
    undefined
    nums
    (6) [1, 2, 3, 4, 5, 6]
    newNums = [7,8,9]
    (3) [7, 8, 9]
    nums = newNums
    (3) [7, 8, 9]
    nums
    (3) [7, 8, 9]
    let nums =[1,2,3,4,5,6]
    undefined
    nums
    (6) [1, 2, 3, 4, 5, 6]
    nums = [...nums]
    (6) [1, 2, 3, 4, 5, 6]
    nums = [...nums]
    (6) [1, 2, 3, 4, 5, 6]
    nums = [...nums,...newNums]
    (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

// let SaveCarPayload = {
// 	streeting: 'car version',
// 	engine: 'V8',
// 	suspension: 'Absolute',
// 	driveMode: '4X4',
// 	color: 'Default'
// };

// let saveRedCarPayload = {...SaveCarPayload,   };

// SaveCarPayload.streeting = 'Noooo';

// console.log(saveRedCarPayload);

// Arrow function

//- syntax sugar
//- scope-less
// - explicit return
// - single line function

//  function dothis(){
//  }
//  var doThis = ()=>{};

// function Student(name) {
// 	this.fullName = name;
// 	console.log(this);

// 	this.sayHI = () => {
// 		console.log('HI I am ' + this.fullName);
// 	};
// }

// let ramesh = new Student('Ramesh');

// ramesh.sayHI();

/// destructing in ES6

// let myArray = [30,20]
// undefined
// let [score,balls] = myArray;
// undefined
// score
// 30
// let myObj = {key:"myKey", prop:"myProp"}
// undefined
// let {key,prop}=myObj
// undefined
// key
// 'myKey'

// Template Litterals

// let score = 30;
// let batman = "Kohli";

// let commentary = `Today its ${batman}'s Birthday and he
// did scored ${score}`;

// console.log(commentary);

// class Todos {
// 	// create a todo
// 	addItem(task) {
// 		this.todoList.push(task);
// 	}

// 	// update a task
// 	updateItem(index, newTaskName) {
// 		this.todoList.splice(index, 1, newTaskName);
// 	}
// 	// delete a task
// 	// list of task
// 	constructor(name) {
// 		this.todoTitle = name;
// 		this.todoList = [];
// 	}
// }

// let myTodos = new Todos('Study');
// myTodos.addItem('going temple');
// myTodos.addItem('going temple2');
// myTodos.updateItem(0,'going basket');
// console.log(myTodos);


