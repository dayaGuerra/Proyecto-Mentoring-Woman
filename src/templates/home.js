  import { logOutOnSubmit } from '../controller-view/view-controller-auth.js'
  
  
  // nav bar
  export const navBar = (data) => {
    const sectionElement = document.createElement('div');
    sectionElement.setAttribute('id', 'container-profile');
    sectionElement.innerHTML = `
    <a href="#/section-friends"><img src="../img/btn-grupo.png" alt=""></a>
    <a href="#/section-search"><img src="../img/search.png" alt=""></a>
    <!-- DATOS GENERALES -->
    <div id="contenedor-datos">
	  	<div>
				<img src="../img/usuario.png" alt="imagen de usuario por default">
        <p>puesto laboral:</p>
        <h1>Nombre y apellido: ${data.name}</h1>
        <h1>Correo:${data.email} </h1>
        <p>Ciudad,pais</p>
      </div>
        <!-- NIVEL DE PERFIL -->
      <div>
        <p>Nivel de perfil: "aqui va un template indicando su nivel"</p>
        <p>=======l===</p>
      </div>
        <!-- OPINION PERSONAL -->
      <div>
        <p>¿Quiero ser?</p>
        <textarea placeholder= "Escribe lo que quieras que sepan de ti aqui"></textarea>
      </div>
   </div>
    `;
    return sectionElement;
  };
 
  
  export const homeProfile = () => {
    const formElem = document.createElement('section');
    formElem.setAttribute('id', 'profile');
    const navBarTemplate = `
    <!-- naVbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#/home">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#/ajustes">Ajustes de Perfil</a>
        <a class="nav-item nav-link" id="sign-out-btn">Cerrar Sesión</a>
        <a class="nav-item nav-link disabled" href="#">Disabled</a>
      </div>
        </div>
      </nav>
    <div id="container-template"></div>`;
    formElem.innerHTML = navBarTemplate;
    const logoutBtn = formElem.querySelector('#sign-out-btn');
     logoutBtn.addEventListener('click', logOutOnSubmit);


    return formElem;
  };

  export const profileSection = () => {
    const formElem = document.createElement('section');
    formElem.setAttribute('id', 'profile-settings');
    const profileTemplate = `
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       <h1 id="get-data"></h1>
        </div>
      </nav>
    <div id="container-template"></div>`;
    formElem.innerHTML = profileTemplate;
    return formElem;
  }