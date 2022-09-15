//https://coding-challenge-api.aerolab.co/products?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFlOTkzYjljNmY2NjAwMjFlNTliNmUiLCJpYXQiOjE2NjI5NDk2OTF9.gTMyNN2qyYgKWNuSGNXDnZow4j_ysAOL7Ghh6sM6swo

import './src/styles/styles.css';
import router from "./src/routes/routes";

window.addEventListener('load', router);
window.addEventListener('hashchange', router);