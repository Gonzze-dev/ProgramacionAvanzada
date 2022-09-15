const getHash = () =>
{
    console.log(  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/')
    return   location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'


}
  
 export default getHash