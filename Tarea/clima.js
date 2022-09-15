const ciudad = "Concepcion del Uruguay"
const pais = "ARG"

const api_key = "bca4ea417c456fd17c8bb40d0f1e4bd2"
const api = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${api_key}`


const getData = async () => {

  try {
    const resp = await fetch(api)
    const data = await resp.json()

    const humedad = data.main.humidity
    const temperatura = Math.round(data.main.temp - 273.15)
    const presion = data.main.pressure

    let info = document.createElement('div')

    document.body.innerHTML = "<h1> Weahter in " + data.name + "</h1>"
    info = `temperatura ${temperatura} C° - humedad ${humedad} - preison ${presion}`
    
    document.body.append(info)
  } catch (error) {
    console.error('Hubo un error en la peticion', error)
  }

}

getData()