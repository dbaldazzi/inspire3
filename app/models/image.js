export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.large_url = data.large_url
  }


  get Template() {
    return `
    <iframe style="background-image: url('${this.url}') background-repeat: no-repeat> 
    </div> 
    `
  }
}