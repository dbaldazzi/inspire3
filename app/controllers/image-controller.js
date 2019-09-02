import ImageService from "../services/image-service.js";

const _is = new ImageService()


function _drawImage() {
  console.log("imagecontroller", _is.image)
  document.getElementById("bg-image").innerHTML = _is.image.Template

}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)

export default class ImageController {

  constructor() {
    _is.addsubscriber('image', _drawImage)
    _is.addsubscriber('imgApi', _drawImage)
    _is.getImage()
    _is.imgApi
  }


  getimgApi() {
    _is.imgApi
    console.log("image from getimage in controller", this.getimgApi)
  }

  getImage() {
    event.preventDefault()
  }

}






