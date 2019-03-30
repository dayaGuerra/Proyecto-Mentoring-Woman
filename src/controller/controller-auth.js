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

export const readDocBDFireStore = (idCollection, idUser) => {
  return firebase.firestore().collection(idCollection).doc(idUser).get();
};

export const getUserUid = () => {
  const user = firebase.auth().currentUser;
  return user ? user.uid : null; 
}

export const isUserSignedIn = () => {
  const uid = localStorage.getItem("uid")
  return !!uid;
}