import Quote from "../models/quote.js"

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: []
}

let _subscriber = {
	quote: []
}

//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {

}
