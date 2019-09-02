export default class Quote {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.author = data.author
    this.body = data.body

  }

  get Template() {
    return `
    <div class="card"> 
    <div class="card-body"> 
    <h3 class="card-title">${this.author}</h3>
    <p class="card-text">${this.body}</p> 
    </div> 
    </div> 
    `
  }




}