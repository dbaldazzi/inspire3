import ImageService from "../services/image-service.js";

const _is = new ImageService()


function _drawImage() {
  console.log("imagecontroller")
  // let image = _is.imgApi
  // let template = '<div>'
  document.getElementById("bg-image").innerHTML = _is.imgApi.template
  window.onload = _drawImage;
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


  getimgApi(url) {
    _is.imgApi

  }

  getImage(url) {
    _is.getImage()
  }

}






