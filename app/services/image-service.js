import Image from "../models/image.js";

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: []

}
let _subscribers = {
	image: []

}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn());
}


//TODO create methods to retrieve data trigger the update window when it is complete
export default class ImageService {
	get ApiImage() {
		return _state.apiImage
	}

	addsubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImage() {
		imgApi.get().then(res => {
			_setState('img', new Image(res.data))
		})
			.catch(err => console.error(err))
	}
}









