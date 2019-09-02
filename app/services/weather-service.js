import Weather from "../models/weather.js";

// @ts-ignore
const weatherApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	timeout: 3000
});

let _state = {
	weather: {},
	myWeather: {}
}

let _subscribers = {
	weather: [],
	myWeather: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


function fahrenheit(kelvin) {
	let temp = (9 / 5 * (kelvin - 273) + 32)
	console.log("the temp in f", fahrenheit)
}

export default class WeatherService {
	get Weather() {
		return _state.weather
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getWeather() {
		console.log('Calling the Weatherman')
		weatherApi.get().then(res => {
			_setState('weather', new Weather(res.data))
		})
	}

}
