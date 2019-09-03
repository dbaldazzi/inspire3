export default class Weather {
  constructor(data) {
    this.id = data.id
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = data.fahrenheit || this.kelvin * (9 / 5) - 459.67
  }


  get Template() {
    return `
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">${this.city}</h5>
    <h1 class="card-text">${this.fahrenheit.toFixed(2)}</h1>
    </div> 
    </div>
    `
  }
}