export default class Todo {
  constructor(data) {
    console.log("todolist from todos", data)
    this._id = data._id
    this.user = data.user
    this.description = data.description
    this.completed = data.completed
    this.todo = data.todo
  }


  //FIXME deleteTodo will need the _id

  get Template() {
    return `
  <p class="text">${this.description}</p> 
  ${this._id ? `<button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>` : ''} 
  `
  }
}
{/* <form onsubmit="app.controller.todoController.addTodos(event)"></form> */ }