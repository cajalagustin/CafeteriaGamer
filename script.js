document.querySelectorAll('.btn-filtro').forEach(boton => {
  boton.addEventListener('click', () => {
    document.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
  });
});