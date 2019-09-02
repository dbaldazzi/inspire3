export default class Quote {
  constructor(data) {
    console.log("raw quote data", data)
    this.id = data.quote.id
    this.url = data.url
    this.author = data.quote.author
    this.body = data.quote.body

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