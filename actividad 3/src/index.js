import _ from 'lodash';
import './estilo.css';
import imagen from './imagen.png'
import datos from './datos.csv'
import yaml from './datos.yaml'
import json5 from './datos.json5'

function componente(){
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola',datos[0][1]],' ');
    elemento.classList.add('hola');
    const miImagen = new Image();
    miImagen.src = imagen;
    elemento.appendChild(miImagen);
    console.log(datos);
    return elemento;
}

console.log(yaml.title)
console.log(json5.owner.name)
document.body.appendChild(componente())