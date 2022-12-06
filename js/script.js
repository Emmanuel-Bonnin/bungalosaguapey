
document.addEventListener('DOMContentLoaded', function() {
let imagenes = [
    {img: './img/1.jpg'},
    {img: './img/2.jpg'},
    {img: './img/3.jpg'},
    {img: './img/4.jpeg'},
    {img: './img/5.jpeg'},
    {img: './img/6.jpeg'},
    {img: './img/7.jpeg'},
    {img: './img/8.jpeg'},
    {img: './img/9.jpeg'},
    {img: './img/10.jpeg'},
    {img: './img/11.jpg'},
    {img: './img/12.jpg'},
    {img: './img/13.jpg'},
    {img: './img/14.jpeg'},
    {img: './img/15.jpeg'},
    {img: './img/16.jpeg'},
    {img: './img/17.jpeg'},
    {img: './img/18.jpeg'},
    {img: './img/19.jpeg'},
    {img: './img/20.jpeg'},
   
]
let contador = 0
const contenedor = document.querySelector('.slideshow')
const overlay = document.querySelector('.overlay')
const galeria_imagenes = document.querySelectorAll('.galeria img')
const galeria2_imagenes = document.querySelectorAll('.galeria2 img')
const img_slideshows = document.querySelector('.slideshow img')

contenedor.addEventListener('click', function(event) {
    let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target
    if (tgt == atras) {
        if (contador > 0) {
            img.src = imagenes[contador - 1].img
            contador--
        } else {
            img.src = imagenes[imagenes.length - 1].img
            contador = imagenes.length - 1
        }
    } else if (tgt == adelante) {
        if (contador < imagenes.length - 1) {
            img.src = imagenes[contador + 1].img
            contador++
        } else {
            img.src = imagenes[0].img
            contador = 0
        }
    }

})
Array.from(galeria_imagenes).forEach(img => {
    img.addEventListener('click', event => {
        const imagen_seleccionada = +(event.target.dataset.imgMostrar)
        img_slideshows.src = imagenes[imagen_seleccionada].img
        contador = imagen_seleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
    })
})

var span = document.getElementsByClassName("btn_cerrar")[0];
span.onclick = function() {
    overlay.style.visibility = "hidden";
}


Array.from(galeria2_imagenes).forEach(img => {
    img.addEventListener('click', event => {
        const imagen_seleccionada = +(event.target.dataset.imgMostrar)
        img_slideshows.src = imagenes[imagen_seleccionada].img
        contador = imagen_seleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
    })
})

var span = document.getElementsByClassName("btn_cerrar")[0];
span.onclick = function() {
    overlay.style.visibility = "hidden";
}
})



