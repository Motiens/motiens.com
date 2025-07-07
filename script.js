window.addEventListener('scroll', () => {
  const popup = document.getElementById('popup');
  if (window.scrollY > 400) {
    popup.style.display = 'block';
  }
});
