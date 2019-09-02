import Todo from "../models/todo.js";

//NOTE your service is all set up for the observer pattern but there is still work to be done

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/jake/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	apiTodos: [],
	myTodos: [],
	error: {},
	currentTodo: {}
}
let _subscribers = {
	todos: [],
	apiTodos: [],
	myTodos: [],
	error: [],
	currentTodo: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				//TODO Handle this response from the server
				_setState('todos', res.data.results)
			})
			.catch(err => _setState('error', err.response.data))
	}

	getMyTodos() {
		_todoApi.get()
			.then(res => {
				let data = res.data.map(t => new todos(t))
				_setState('myTodos', data)
				console.log(data)
			})
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

		todoApi.put(todoId, todo)
			.then(res => {
				//TODO do you care about this data? or should you go get something else?
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(_id) {
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
		todoApi.delete(_state.currentTodo._id)
			.then(res => {
				let index = _state.currentTodo.findIndex(t => t._id == _state.currentTodo._id)
				_state.currentTodo.splice(index, 1)
				_setState('myTodos', _state.myTodos)
			})
	}
}
