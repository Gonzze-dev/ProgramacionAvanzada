import Header from '../templates/Header';
import Nav from '../templates/Nav';
import MenuBar from '../pages/MenuBar'
import Home from '../pages/Home';
import productInfo from '../pages/Product';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import getData from '../utils/getData';

const routes = {
    '/': Home,
    '/:id': productInfo,
    '/about':"about"
};

const router = async () => 
{
    const products = await getData();

    const header = null || document.getElementById('Header');
    const nav = null || document.getElementById("Nav");
    const menuBar = null || document.getElementById("container-MenuBar");
    const content = null || document.getElementById("content-products");

    header.innerHTML = await Header();
    nav.innerHTML = await Nav();
    menuBar.innerHTML = await MenuBar(products.length);
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render(products);
};

export default router;
