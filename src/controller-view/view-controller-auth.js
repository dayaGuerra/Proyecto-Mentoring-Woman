import { signUp, logIn, logOut } from '../controller/controller-auth.js';
import{ validation } from '../controller/validacion.js'

// cambio de hash
export const changeHash = (hash) => {
    location.hash = hash;
  };

// Datos de usuario logueado
export const logInOnSubmit = (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-social-media').value;
    const pass = document.querySelector('#password-social-media').value;
    const errorMessage = document.querySelector('#error-message-login');

    if (validation(pass) === true) {
      logIn(email, pass)
        .then(result => {  
          console.log('estas logueado');
          changeHash('/registerPostSignUp')
        }).catch(error => {
          console.log(error.code);
          if (error.code === 'auth/wrong-password') {
            errorMessage.innerHTML = 'La contraseña no es correcta. Vuelve a intentarlo';
          } else if (error.code === 'auth/user-not-found') {
            errorMessage.innerHTML = 'correo inválido.';
          }
        });
    } else {
      errorMessage.innerHTML = 'datos incorrectos';
    }
  };

// Datos de usuario registrado
export const signUpOnSubmit = (event) => {
    event.preventDefault();

    const email = document.querySelector('#create-email').value;
    const password = document.querySelector('#create-password').value;
    const name = document.querySelector('#name-social-media').value;
    const lastName = document.querySelector('#lastname-social-media').value;
  
    const errorMessage = document.querySelector('#error-message-signup');
    if (validation(email) === true && validation(password) === true && validation(name) === true && validation(lastName) === true) {
      signUp(email, password)
        .then(result => {
          const configuration = {
            url: 'http://localhost:5000/'
          };
          result.user.sendEmailVerification(configuration).catch(error => {
           // console.log(error.code);
            console.log('No se pudo enviar email');
          });
          firebase.auth().signOut();
        }).catch(error => {
          console.log(error.code);
          if (error.code === 'auth/email-already-in-use') {
            errorMessage.innerHTML = `Otra cuenta usa ${email}.`;
          }
        });
    } else {
      errorMessage.innerHTML = 'complete sus datos';
    }
  };

//   Cerrar sesion
export const logOutOnSubmit = () => {
    logOut()
      .then(() => {
        changeHash('/signin');
        console.log('ya no estas logueado');
      // respuesta a un usuario no logueado
      }).catch(error => console.log(error.code));
  };

  // Retorna la foto de perfil del usuario
export const getProfilePicUrl = () => 
firebase.auth().currentUser.photoURL;

// Retorna el nombre del usuario
export const getUserName = () => 
firebase
  .auth()
  .currentUser
  .displayName;

// uid del usuario actual
export const isUserSignedIn = () => 
firebase.auth().currentUser.uid;

// Estado del usuario (conectado-no conectado), las vistas que puede tener

export const authStateObserver = (user) => {
if (user && user.emailVerified) { 
 
  changeHash('/registerPostSignUp');
} else {
  // alert('Verifica tu correo electronico para continuar');
  changeHash('/signin');
}
};

// Inicializar firebase
export const initFirebaseAuth = () => {
// Escucha los estados de cambio
firebase.auth().onAuthStateChanged(authStateObserver);
};
