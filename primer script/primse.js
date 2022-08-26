
const mipromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true

        if (descuento)
        {
            resolve('se aplico el descuento')
        }
        else
        {
            reject('No se pudo aplicar el descuento')
        }
    }, 300)
  })

  const respuesta = mipromesa.then(value => {
    return value
  })

  console.log(respuesta)
