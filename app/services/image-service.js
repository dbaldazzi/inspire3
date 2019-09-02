import Image from "../models/image.js";

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

imgApi.get('').then(res => {
	console.log("imageservice", res.data)
})

let _state = {
	image: {},
	imgApi: {}
}

let _subscribers = {
	image: [],
	imgApi: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}


//TODO create methods to retrieve data trigger the update window when it is complete
export default class ImageService {
	get imgApi() {
		return _state.imgApi
	}

	addsubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}


	getImage() {
		console.log("image from imageservice")
		imgApi.get().then(res => {
			_setState('image', new Image(res.data))
		})

	}

	// getAllApi() {
	// 	_apiImage.get()
	// 		.then(res => {
	// 			_setState('apiImage', res.data.results)
	// 			console.log(res.data.results)
	// 		})
	// }



}

