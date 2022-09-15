//token=

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFlOTkzYjljNmY2NjAwMjFlNTliNmUiLCJpYXQiOjE2NjI5NDk2OTF9.gTMyNN2qyYgKWNuSGNXDnZow4j_ysAOL7Ghh6sM6swo';
const API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;

    try 
    {
        const response = await fetch(apiURL);
        const data = response.json();
        return data;
    } catch(error) 
    {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData