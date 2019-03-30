import { signInForm, signUpForm }from '../templates/login.js';
import { postSignUp, sector } from '../templates/registrer-post-signup.js';
import { homeProfile, navBar } from '../templates/home.js';
import { isUserSignedIn, readDocBDFireStore } from '../controller/controller-auth.js'
import { changeHash } from '../controller-view/view-controller-auth.js';

// ambas tienen la mista estructura.

const changeTmp = (hash) => {
  if(isUserSignedIn()){
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/home');
    }
    if (hash === '#/home' || hash === '#/signin' || hash === '#/signup' || hash === '#/registerPostSignUp' || hash === '#/sector' || hash === '#/home') {
      return viewTmp(hash);
    }
  } else {
      return viewTmp('#/signin');
    }
  }

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  console.log(routers, router);
  
  switch (router) {
    case 'registerPostSignUp':
    container.appendChild(postSignUp())
    break;
    case 'sector':
    container.appendChild(sector());
    break;
    case 'signin':
    console.log("hola");
    container.appendChild(signInForm())
    break;
    case 'signup':
    container.appendChild(signUpForm());
    break;
    case 'home':
    container.appendChild(homeProfile());
    const containerTemplate = document.getElementById('container-template');
    containerTemplate.innerHTML = '';
    const uid = localStorage.getItem("uid")
    let data = {};
  if(uid) {
    readDocBDFireStore('mentor', uid).then((doc) => {
      data = doc.data();
      containerTemplate.innerHTML = '';
      containerTemplate.appendChild(navBar(data));
    });
  }
    containerTemplate.appendChild(navBar(data));
    break;
    
}
};

export const initRouters = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
// export default initRouters;