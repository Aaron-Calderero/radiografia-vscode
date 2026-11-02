const boton = document.querySelector('#btn-paleta');

boton.addEventListener('click', () => {
  const hora = new Date().toLocaleTimeString('es-ES');
  console.log(`[${hora}] Paleta de comandos abierta: principal.js se ejecuta en el navegador.`);
});

console.log('principal.js cargado como módulo.');
