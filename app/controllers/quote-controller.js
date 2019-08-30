import QuoteService from "../services/quote-service.js";

let _quoteService = new QuoteService()

function drawquote() {
  document.getElementById("quote").innerHTML = _quoteService.quote.Template
}

//TODO Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    _quoteService.addsubscriber('quote', drawquote)
    _quoteService.getQuote()
  }

  addQuote(q) {
    q.preventDefault()
    let form = q.target
    let quote = {



    }
    _quoteService.addQuote(quote)
  }









}
