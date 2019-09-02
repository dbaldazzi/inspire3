import Quote from "../models/quote.js"

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: [],
	myQuote: []
}

let _subscriber = {
	quote: [],
	myQuote: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscriber[propName].forEach(fn => fn())
}


//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {

	get Quote() {
		return _state.quote
	}

	addsubscriber(prop, fn) {
		_subscriber[prop].push(fn)
	}

	getQuote() {
		console.log("quote of the day from service")
		_quoteApi.get().then(res => {
			_setState('quote', new Quote(res.data))
		})
	}







}
