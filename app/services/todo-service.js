import Todo from "../models/todo.js";

//NOTE your service is all set up for the observer pattern but there is still work to be done

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/david/todos/',
	timeout: 3000
});

// @ts-ignore
// let currentTodosApi = axios.create({
// 	baseURL: 'http://bcw-sandbox.herokuapp.com/api/david/todos'
// })

let _state = {
	todos: [],
	apiTodos: [],
	myTodos: [],
	error: [],
	currentTodos: []
}
let _subscribers = {
	todos: [],
	apiTodos: [],
	myTodos: [],
	error: [],
	currentTodos: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

export default class TodoService {

	setActive(_id) {
		let todo = _state.myTodos.find(t => t._id == _id)
		_setState('currentTodos', todo)
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get apiTodos() {
		return _state.apiTodos.map(t => new Todo(t))
	}

	// get currentTodos() {
	// 	return new Todo(_state.currentTodos)
	// }

	// get myTodos() {
	// 	return _state.myTodos
	// }

	get TodoError() {
		return _state.error
	}

	// getMyTodos() {
	// 	currentTodosApi.get()
	// 		.then(res => {
	// 			console.log(res.data);
	// 			_setState('myTodos', res.data.data)
	// 		})
	// }

	// getMyTodosById() {
	// 	currentTodosApi.get(_state.currentTodos._id)
	// 		.then(res => {
	// 			_setState('currentTodos', res.data.data)
	// 		})
	// }

	getApiTodos() {
		todoApi.get()
			.then(res => {
				_setState('apiTodos', res.data.data)
			})
	}




	get Todos() {
		return _state.todos
	}



	addTodo(todo) {
		todoApi.post('', _state.todos)
			.then(res => {
				_state.myTodos.push(new todo(res.data))
				_setState('myTodos', _state.myTodos)
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
	}

	editTodos(update) {
		todoApi.put(_state.todos._id, update)
			.then(res => {
				this.getApiTodos()
				// 		//TODO do you care about this data? or should you go get something else?
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodos() {
		todoApi.delete(_state.currentTodo._id)
			.then(res => {
				let index = _state.currentTodo.findIndex(t => t._id == _state.currentTodo._id)
				_state.currentTodo.splice(index, 1)
				_setState('myTodos', _state.myTodos)
			})
	}
}
