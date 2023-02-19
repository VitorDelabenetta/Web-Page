// Pegar o elemento #container
var container = document.getElementById('container');

// Função para a janela seguir ao movimento do mouse
window.onmousemove = function(e) {
    var x = - e.clientX/5,
        y = - e.clientY/5;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}