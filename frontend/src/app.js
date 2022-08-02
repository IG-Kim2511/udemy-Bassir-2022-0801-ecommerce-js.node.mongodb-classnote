
import HomeScreen from './screens/HomeScreen.js';


//🦄c06
const router =()=>{
    const main = document.getElementById('main-container');
    main.innerHTML = HomeScreen.render();
}

window.addEventListener('load',router);