
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
  })
  sectionElement.querySelector('#mentee').addEventListener('click', () => {
    changeHash('/sector');
  })
   
    return sectionElement;
  };


  export const sector = () => {
    const formElem = document.createElement('section');
    formElem.setAttribute('id', 'sector');
    const tempFormSignUp = `
      <div class="form-sign-up" id="signup">
        <h2>¿Que sector te interesa?
        <div id="sector-btns">
            <button id="agricultura" value="agricultura">agricultura</button>
            <button id="mineria" value="mineria">mineria</button>
            <button id="construccion" value="construccion">construccion</button>
            <button id="ciencias" value="cienciasPoliticas">Ciencias politicas</button>
            <button id="negocios" value="negocios">Negocios</button>
            <button id="tecnologia" value="tecnologia">Tecnologia</button>
        </div>
      </div>`;
    
    formElem.innerHTML = tempFormSignUp;
    tempFormSignUp.querySelector('#sector').addEventListener('click', () => {
        changeHash('/sector');
      })
    return formElem;
  };

