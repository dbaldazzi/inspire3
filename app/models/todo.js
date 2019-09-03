export default class Todo {
  constructor(data) {
    console.log("todolist from todos", data)
    this._id = data._id
    this.user = data.user
    this.description = data.description
    this.completed = data.completed
    this.todo = data.todo
    this.currentTodos = data.currentTodos
  }


  //FIXME deleteTodo will need the _id

  get Template() {
    return `
  <div class="card">
  <div class="card-body">  
  <p class="card-text">${this.description}</p> 
  ${this._id ? `<button class="btn btn-danger" onclick="app.controller.todoController.deleteTodo(${this._id})">Delete</button>` : ''}
  <form> 
  <input type="text" name="newTodo" id"newTodo'>
  <button type="submit">Add Todo</button> 
  </form> 
</div> 
</div> 
`
  }
}