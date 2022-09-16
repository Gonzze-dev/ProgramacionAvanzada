const menor = ( a, b ) =>
{
    if ( a.cost < b.cost)
    {
        return -1;
    }
    if ( a.cost > b.cost)
    {
        return 1;
    }
    return 0;
}

const ordenarMenor = (objeto) =>
{
    return objeto.sort(menor)
}


export default ordenarMenor;
