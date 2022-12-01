document.addEventListener('DOMContentLoaded', function() {
let imagen = [
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles2.jpg'},
{img: '/img/exterior_chimenea.jpg'},
{img: '/img/exterior_cochera.jpg'},
{img: '/img/exterior_cochera2.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'},
{img: '/img/exterior_arboles.jpg'}
]
let contador = 0
const contenedor = document.querySelector('.slideshow')
const overlay = document.querySelector('.overlay')
const galeria_img = document.querySelectorAll('.galeria img')
const img_slideshow = document.querySelector('.slideshow img')

contenedor.addEventListener('click' , function (event){
    let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target
        if (tgt == atras){
           if (contador > 0){
            img.scr = img[contador - 1].img
            contador--
           } else {
            img.scr = img[img.length - 1].img
            contador = img.length - 1
           }
        }else if (tgt == adelante){
            if (contador < img.length - 1){
                img.src = img[contador + 1].img
                contador++
            } else {
                img.src = img[0].img
                contador - 0
            }

        }
        })

  Array.from(galeria_img).forEach ( img => {
    img.addEventListener('click', event =>{
        const imagen_seleccionada = +event.target.dataset.imgMostrar
        img_slideshow.src = img [imagen_seleccionada].img
        contador = imagen_seleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
    })

    document.querySelector('.btn_cerrar').addEventListener('click', () =>{
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'

    })
  })      

})




