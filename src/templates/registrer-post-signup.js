
import { changeHash } from '../controller-view/view-controller-auth.js';

export const postSignUp = () => {
    const sectionElement = document.createElement('section');
    sectionElement.setAttribute('id', 'postSignUp');
    sectionElement.innerHTML = `
      <div class="form-sign-up" id="signup">
        <h2>¿Que deseas ser?
        <div>
            <button id="mentora">mentora</button>
            <button id="mentee">mentee</button>
        </div>
      </div>`;
    
  sectionElement.querySelector('#mentora').addEventListener('click', () => {
    changeHash('/sector');
    console.log('guardar el valor en la base de datos ');
  })
  sectionElement.querySelector('#mentee').addEventListener('click', () => {
    changeHash('/sector');
    console.log('guardar el valor en la base de datos ');
  })
   
    return sectionElement;
  };


  export const sector = () => {
    const formElem = document.createElement('section');
    formElem.setAttribute('id', 'sector');
    formElem.innerHTML = `
      <div  id="signup">
        <h2>¿Que sector te interesa?
        <div id="sector-btns">
        <input type="checkbox" id="type-sector1"><label for="type-sector1">público</label>
        <input type="checkbox" id="type-sector2"><label for="type-sector2">mineria</label>
        <input type="checkbox" id="type-sector3"><label for="type-sector3">construccion</label>
        <input type="checkbox" id="type-sector4"><label for="type-sector4">Ciencias politicas</label>
        <input type="checkbox" id="type-sector5"><label for="type-sector5">Negocios</label>
        <input type="checkbox" id="type-sector6"><label for="type-sector6">Tecnologia</label>
        <button id="btn-next">Siguiente</button>
        </div>
      </div>`;
    
      formElem.querySelector('#btn-next').addEventListener('click', () => {
        console.log('guardar el valor en la base de datos ');
        changeHash('/home');
      })
    return formElem;
  };

