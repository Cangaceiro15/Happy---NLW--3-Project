const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const spanLat = document.querySelector('span[data-lat]');
const spanLng = document.querySelector('span[data-lng]');

//criar o mapa
const map = L.map('mapid', options).setView([spanLat.dataset.lat, spanLng.dataset.lng], 13);

//criar e adicionar o tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
}).addTo(map);

//criar icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

//criar e adicionar marcador

L.marker([spanLat.dataset.lat, spanLng.dataset.lng], { icon: icon }).addTo(map);

/* galeria das imagens */
function selectImage(event) {
    const button = event.currentTarget;

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    console.log(buttons);
    buttons.forEach((button) => {
        button.classList.remove("active");
    })

    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details img");

    //atualizar o container de imagem
    imageContainer.src = image.src;

    //adicionar a classe .active para esse botao
    button.classList.add("active");
}