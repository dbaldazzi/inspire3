import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//FIXME You will likely need only 1 draw method

//TODO Create the render function
function _drawTodos() {
	let template = '<ul>'
	let todos = _todoService.apiTodos
	//FIXME use input tags instead of li
	todos.forEach(t => {
		// template += `<li onclick="app.controllers.todosController.select('${t.id}')" > ${t.name}</li>`
		template += t.Template
	})
	document.getElementById('todos').innerHTML = template + '</ul>'
}

// function _drawCurrentTodos() {
// 	document.getElementById('currentTodos').innerHTML = _todoService.currentTodos.Template
// }

// function _drawTodos() {
// 	document.getElementById('todos').innerHTML = _todoService.currentTodos.Template
// }

// function _drawMyTodos() {
// 	let todos = _todoService.myTodos
// 	let template = '<ul>'
// 	todos.forEach(s => {
// 		template += `<li onclick="app.controller.todosController.setActive('${this._id}')></li>`
// 	})
// 	document.getElementById('todos').innerHTML = template + '</ul>'
// }

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('error', _drawError)
		//_todoService.addSubscriber('todos', _drawTodos)
		//	_todoService.addSubscriber('currentTodos', _drawCurrentTodos)
		//	_todoService.addSubscriber('myTodos', _drawMyTodos)
		_todoService.addSubscriber('todos', _drawTodos)



		_todoService.getApiTodos()
		// _todoService.getMyTodos()
	}

	// setActive(id) {
	// 	_todoService.setActive(id)
	// }



	addTodo(t) {
		_todoService.addTodo()
		let form = t.target
		let todo = {
		}
	}

	getApiTodos() {
		event.preventDefault()
	}


	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodos(todoId)
		document.getElementById('todos').innerHTML = ''
	}



}
