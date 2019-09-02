export default class Todo {
  constructor(data) {
    console.log("todolist from todos", data)
    this._id = data._id
    this.user = data.user
    this.description = data.description
    this.completed = data.completed
    this.todo = data.todo

  }


  get Template() {
    return `
  <div class="card">
  <div class="card-body">  
  <h5 class="card-title">${this.todo}</h5> 
  <p class="card-text">${this.description}</p> 
  <form>
  <imput type="text" name="newTodo">
  <button class="btn btn-success" onclick="app.controller._todocontroller.addtodo()">Add</button> 
    ${this._id ? ` <button class="btn btn-danger" onclick="app.controller._todoController.deleteToDo()">Delete</button>` : ''}
</div> 
</div> 
`
  }
}