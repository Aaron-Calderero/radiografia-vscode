import { caracteristicas } from './datos.js';
import { mostrarMensaje, alternarInfo, pintarCaracteristicas, filtrarCaracteristicas, mostrarSinResultados } from './interfaz.js';

const botonPaleta = document.querySelector('#btn-paleta');
let pulsaciones = 0;

// Manejador 1: actualiza el mensaje visible en la página.
botonPaleta.addEventListener('click', () => {
  pulsaciones += 1;
  mostrarMensaje(`Paleta de comandos abierta ${pulsaciones} ${pulsaciones === 1 ? 'vez' : 'veces'}.`);
});

// Manejador 2 (independiente del primero): registra la interacción en la consola.
botonPaleta.addEventListener('click', (evento) => {
  const hora = new Date().toLocaleTimeString('es-ES');
  console.log(`[${hora}] Clic en "${evento.currentTarget.id}": se ejecuta el segundo manejador.`);
});

const botonInfo = document.querySelector('#btn-info');
const panelInfo = document.querySelector('#info-ampliada');

botonInfo.addEventListener('click', () => alternarInfo(botonInfo, panelInfo));

const listaCaracteristicas = document.querySelector('#lista-caracteristicas');
pintarCaracteristicas(caracteristicas, listaCaracteristicas);

const buscador = document.querySelector('#buscador');
const avisoSinResultados = document.querySelector('#sin-resultados');

buscador.addEventListener('input', () => {
  const resultado = filtrarCaracteristicas(caracteristicas, buscador.value);
  pintarCaracteristicas(resultado, listaCaracteristicas);
  mostrarSinResultados(avisoSinResultados, resultado.length === 0);
});

console.log('main.js cargado como módulo.');
