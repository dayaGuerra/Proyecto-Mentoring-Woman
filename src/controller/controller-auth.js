// Registrarse o crear cuenta
export const signUp = (email, pass) => 
  firebase.auth().createUserWithEmailAndPassword(email, pass);   

//   Iniciar sesión
export const logIn = (email, pass) =>
  firebase.auth().signInWithEmailAndPassword(email, pass);

//   Cerrar sesión
export const logOut = () => {
  return firebase.auth().signOut();
};

