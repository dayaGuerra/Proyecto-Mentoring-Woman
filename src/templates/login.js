import { logInOnSubmit, signUpOnSubmit, changeHash } from '../controller-view/view-controller-auth.js'

// export const startForm = () => {
//   const formElem = document.createElement('div');
//   formElem.setAttribute('id', 'start');
//   const tempformLogin = `<div>
//   <h1>Se parte de la red de crecimeinto profesional.</h1>
//   <img src="../img/Group.png" alt="imagen de logo">
//   <button class="next" id="btn-next">Siguiente</button>
//   </div>`;
//   formElem.innerHTML = tempformLogin;
//   const logInBtn = formElem.querySelector('#btn-next');
//   logInBtn.addEventListener('click', () => {
//     changeHash('/startNext');
//   });
//   return formElem;
// }

export const startNext = () => {
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'startNext');
  const tempformLogin = `<div>
  <h1>Se parte de la red de crecimeinto profesional.</h1>
  <button class="next" id="btn-login2">Ingresar</button>
  <button class="next" id="btn-register">Registrate</button>
  </div>`;
  formElem.innerHTML = tempformLogin;
  const logInBtn2 = formElem.querySelector('#btn-login2');
  logInBtn2.addEventListener('click', () => {
    changeHash('/signin');
  });

  const registerBtn = formElem.querySelector('#btn-register');
  registerBtn.addEventListener('click', () => {
    changeHash('/registerPostSignUp');
  });
  return formElem;
}

export const signInForm = () => {
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'signin');
  const tempformLogin = `
  <div id="sign-in" class = "signin-container">
    <div class="text-first text-login">
      <h4>La primera Red Social para emprendedores peruanos</h4>
    </div>
    <div>
      <div class="col-form-login-account">
        <p class="text-login text-first-sesion">Iniciar Sesión</p>
      </div>
      <div class="register-inputs-field col-form-create-account">
      <input type="email" class="login-social-media" id="email-social-media" placeholder="Correo electronico" required>
      <input type="password" class="login-social-media" id="password-social-media" placeholder="Contraseña" required>
      <p id="error-message"></p>
    </div>
    <p id="error-message-login"></p>
    <button class="login-social-media btn-login" id="btn-login">Ingresa</button>
    <p>Eres nuevo en Social Media? <a href="#/signup">Registrate</a></p>
   </div>
  </div>`;
  
  formElem.innerHTML = tempformLogin;
  const logInBtn = formElem.querySelector('#btn-login');
  logInBtn.addEventListener('click', logInOnSubmit);
  return formElem;
};

export const signUpForm = () => {
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'signup');
  const tempFormSignUp = `
    <div class="form-sign-up" id="signup">
      <div class="col-form-create-account">
        <p class="text-login text-first">
          <a href="#/" class="back fa fa-chevron-circle-left "></a> Crea una cuenta ¡Es gratis!
        </p>
      </div>
      <div class="register-inputs-field col-form-create-account">
        <input type="text" class="login-social-media" id="name-social-media" placeholder="Nombre y apellidos">
        <input type="email" class="login-social-media" id="create-email" placeholder="Correo electronico">
        <input type="password" class="login-social-media" id="create-password" placeholder="Contraseña">
        <select id='sector-selector' class='select-sector' name='sector'>
                    <option value=''>Sector que perteneces</option>
                    <option value='Publico'>Publico</option>
                    <option value='Mineria'>Mineria</option>
                    <option value='Construccion'>Construccion</option>
                    <option value='Politica'>Politica</option>
                    <option value='Negocios'>Negocios</option>
                    <option value='Tecnologia'>Tecnologia</option>
                    <option value='Tecnologia'>Servicios</option>
                  </select>
      </div>
      <p id="error-message-signup"></p>
      <button class="login-social-media btn-login" id="btn-register">Registrate</button> 
    </div>`;
  
  formElem.innerHTML = tempFormSignUp;
  const SignUpBtn = formElem.querySelector('#btn-register');
  SignUpBtn.addEventListener('click', signUpOnSubmit);
  return formElem;
};