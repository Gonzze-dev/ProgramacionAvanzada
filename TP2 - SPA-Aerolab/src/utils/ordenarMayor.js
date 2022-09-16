const mayor = ( a, b ) =>
{
    if ( a.cost > b.cost)
    {
        return -1;
    }
    if ( a.cost < b.cost)
    {
        return 1;
    }
    return 0;
}

const ordenarMayor = (objeto) =>
{
    return objeto.sort(mayor)
}


export default ordenarMayor;