const apiKey = 'iHq2z2SnaEjeXX1lwCUa6KSs0Vv7l56H'

const api = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`

const getImages = async() =>
{
    try
    {
        const response = await fetch(api)
        const { data } = await response.json()
        console.log(data)
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    }
    catch
    {
        console.error("hubo un error con la api")
    }

}