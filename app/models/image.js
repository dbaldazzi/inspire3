export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.large_url = data.large_url
    //console.log("from image constructor", data.large_url)
  }


  get Template() {
    return `
    <img src="${this.large_url}" style="background-size: contain, background-repeat: no-repeate;" > 
    </div> 
     `

  }
}