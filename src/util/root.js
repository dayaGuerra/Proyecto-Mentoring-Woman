import { signInForm, signUpForm }from '../templates/login.js';
import { postSignUp, sector } from '../templates/registrer-post-signup.js';
import { homeProfile, navBar } from '../templates/home.js';
console.log(navBar);
console.log(homeProfile);
// ambas tienen la mista estructura.

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/home');
    } else if (hash === '#/home' || hash === '#/signin' || hash === '#/signup' || hash === '#/registerPostSignUp' || hash === '#/sector' || hash === '#/home') {
      return viewTmp(hash);
    } else {
      return viewTmp('#/different');
    }
  }

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  
  switch (router) {
    case 'registerPostSignUp':
    container.appendChild(postSignUp())
    break;
    case 'sector':
    container.appendChild(sector());
    break;
    case 'signin':
    container.appendChild(signInForm())
    break;
    case 'signup':
    container.appendChild(signUpForm());
    break;
    case 'home':
    container.appendChild(homeProfile());
    const containerTemplate = document.getElementById('container-template');
    containerTemplate.innerHTML = '';
    containerTemplate.appendChild(navBar());
    break;
    
}
};

export const initRouters = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
// export default initRouters;