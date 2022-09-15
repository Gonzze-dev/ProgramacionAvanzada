const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) =>
{
    const apiURL = id ? `${API}${id}` : API

    try
    {
        const response = await fetch(apiURL)
        const data = response.json();
        return data
    }
    catch (error)
    {
        console.log('ERROR AL TRAER LOS DATOS ', error)
    }
    

}

export default getData