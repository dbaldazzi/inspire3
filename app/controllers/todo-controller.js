import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//FIXME You will likely need only 1 draw method

//TODO Create the render function
function _drawtodoApi() {
	let todos = _todoService.todoApi
	let template = ''
	// //FIXME use input tags instead of li
	todos.forEach(t => {
		template += t.Template
		// `<div>"app.controller.todoController.todo('${this._Id}')" > ${this.description}</div>`
		//`<input onclick="app.controller.todoController.todo('${t._id}')">${t.todo}></input>`
	})

	document.getElementById('todos').innerHTML = template
}
//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todoApi', _drawtodoApi)
		//_todoService.addSubscriber('apiTodos', _drawtodoApi)
		_todoService.getAllApi()
	}

	newTodos(event) {
		event.preventDefault()
		let form = event.target
		let newTodo = {
			description: form.newTodo.value
		}
		_todoService.newTodos(newTodo)

		console.log("hello from todoControler", newTodo)

		form.reset()


		// 	TodoService.addtodos(newTodo)
		// 	_drawTodos()
		// }
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(_Id) {
		_todoService.removeTodos(_Id)
	}

}

