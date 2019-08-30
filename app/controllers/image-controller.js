import ImageService from "../services/image-service.js";

const _is = new ImageService()

function drawImage() {
  document.getElementById("bg-image").innerHTML = template
}


//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _is.addsubscriber('image', drawImage)
    _is.getImage()
  }

}

