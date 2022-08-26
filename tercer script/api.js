const apiKey = 'iHq2z2SnaEjeXX1lwCUa6KSs0Vv7l56H'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)

peticion
.then( resp => resp.json() )
.then( ({data} ) => {
console.log( data.images.original.url)

const { url } = data.images.original

const img = document.createElement('img')
img.src = url

document.body.append(img)

})
.catch( console.warn)