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
	todoApi: [],
	error: [],
	description: [],
}
let _subscribers = {
	todos: [],
	todoApi: [],
	error: [],
	description: [],
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

export default class TodoService {
	get todoApi() {
		return _state.todoApi.map(t => new Todo(t))
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get TodoError() {
		return _state.error
	}

	//get todos
	getAllApi() {
		todoApi.get()
			.then(res => {
				_setState('todoApi', res.data.data)
				console.log(res.data.results)
			})
			.catch(err => console.error(err))
	}

	//create new todo
	newTodos(todo) {
		todoApi.post('', todo)
			.then(res => {
				this.getAllApi()
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let Todos = _state.todoApi.find(todo => todo._id == todoId)
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
	}

	//delete todos 

	removeTodos(_id) {
		todoApi.delete(_id)
			.then(res => {
				// let index = _state.todoApi.findIndex(t => t._id == _state.api._id)
				// _state.todoApi.splice(index, 1)
				// _setState('todos', _state.todoApi)
				this.getAllApi()
			})
	}

}
