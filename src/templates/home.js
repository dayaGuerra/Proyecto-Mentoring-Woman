  
  export const homeProfile = () => {
    const formElem = document.createElement('section');
    formElem.setAttribute('id', 'profile');
    formElem.innerHTML = `
    <!-- BUTTONS -->
    <div class="profile-userbuttons">
      <button type="button" class="btn-profile">Solicitudes</button>
      <button type="button" class="btn-profile">Buscar</button>
    </div>

    <!-- DATOS GENERALES -->
    <div id="contenedor-datos">
	  	<div>
				<img src="" alt="imagen de usuario por default">
        <p>puesto laboral</p>
        <h1>Nombre y apellido</h1>
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
    </div>`;
    
    return formElem;
  };

