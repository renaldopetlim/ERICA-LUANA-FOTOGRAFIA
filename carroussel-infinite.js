var clientSlider = document.getElementById('client-slider');
var clientList = clientSlider.getElementsByClassName('img');

setInterval(() => {
    clientSlider.style.transform = "translateX(-20%)";
}, 5000);

clientSlider.addEventListener('transitionend', function (){
    clientSlider.appendChild(clientSlider.firstElementChild);

    clientSlider.style.transition = "none";
    clientSlider.style.transform = "translateX(0)";
    setTimeout(() => {
        clientSlider.style.transition = "1.5s";
    });
})