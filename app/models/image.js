export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.large_url = data.large_url
  }


  get Template() {
    return `
    <div class="background-image">
    <iframe src="${this.large_url}"></iframe> 
    </div> 
    `
  }
}