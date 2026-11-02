// Funciones que modifican el DOM.

export function mostrarMensaje(texto) {
  const salida = document.querySelector('#mensaje-estado');
  salida.textContent = texto;
}

export function alternarInfo(boton, panel) {
  const oculto = panel.classList.toggle('oculto');
  boton.setAttribute('aria-expanded', String(!oculto));
  boton.textContent = oculto ? 'Mostrar información ampliada' : 'Ocultar información ampliada';
}

export function pintarCaracteristicas(lista, contenedor) {
  contenedor.replaceChildren();
  for (const item of lista) {
    const tarjeta = document.createElement('li');
    tarjeta.className = 'tarjeta';

    const titulo = document.createElement('h3');
    titulo.textContent = item.nombre;

    const categoria = document.createElement('span');
    categoria.className = 'categoria';
    categoria.textContent = item.categoria;

    const descripcion = document.createElement('p');
    descripcion.textContent = item.descripcion;

    tarjeta.append(titulo, categoria, descripcion);
    contenedor.append(tarjeta);
  }
}

// Quita mayúsculas y tildes para comparar textos.
function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function filtrarCaracteristicas(lista, texto) {
  const buscado = normalizar(texto.trim());
  return lista.filter((item) =>
    normalizar(item.nombre).includes(buscado) || normalizar(item.descripcion).includes(buscado)
  );
}

export function mostrarSinResultados(aviso, visible) {
  aviso.classList.toggle('oculto', !visible);
}
