window.addEventListener('scroll', () => {
    const popup = document.getElementById('popup');
    if (window.scrollY > 300) {
        popup.style.display = 'block';
    }
});

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

function mostrarFormulario() {
    document.getElementById('popup').style.display = 'block';
}
