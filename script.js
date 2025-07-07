
window.addEventListener('scroll', () => {
  const popup = document.getElementById('popup');
  if (window.scrollY > 500) {
    popup.style.display = 'block';
  }
});
function cerrarPopup() {
  document.getElementById('popup').style.display = 'none';
}
function mostrarFormulario(servicio) {
  document.getElementById('popup').style.display = 'block';
}
