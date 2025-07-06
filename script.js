
// Mostrar el formulario emergente al hacer scroll
window.addEventListener('scroll', () => {
  const popup = document.getElementById('popup');
  if (window.scrollY > 500 && popup) {
    popup.style.display = 'block';
  }
});
