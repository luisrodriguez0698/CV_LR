const slider_content = document.querySelectorAll('.slider_content')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let index = 0


window.addEventListener('load', function(){

    // let fotoLoad = document.getElementById('FotoPerfilAnimado');
    // fotoLoad.style.animation = 'zoom-in-out 1.5s ease-out';

    // let ContenedorBlack = document.getElementById('ContenedorBlack');
    // ContenedorBlack.style.animation = ''
        
})

let AnimacionFade = document.querySelectorAll('.Fade-Left');



function viewEfectScroll(){
    let scrollTop = document.documentElement.scrollTop;
    
    for (var i=0; i < AnimacionFade.length; i++){
        let AlturaAnimacion = AnimacionFade[i].offsetTop;
        if(AlturaAnimacion - 600 < scrollTop){
            AnimacionFade[i].style.animation = 'Left-In 1s ease'
            AnimacionFade[i].style.opacity = 1;
            
        }else{
            AnimacionFade[i].style.animation = 'Left-Out 1s ease'
            AnimacionFade[i].style.opacity = 0;

        }
    }

}

window.addEventListener('scroll', viewEfectScroll);



let AnimacionVelozIn = document.querySelectorAll('.Veloz-Left-In');
let AnimacionVelozRightIn = document.querySelectorAll('.Veloz-Right-In');
let AnimacionVelozDownIn = document.querySelectorAll('.Veloz-Down-In');

const mount = () => slider_content[index].classList.add('active')
const unmount = () => slider_content[index].classList.remove('active')
next.addEventListener('click', () => {
    unmount()
    
    if(index >= slider_content.length - 1){
        index = 0;
    }
    else {
        index++
    }

    for (var i=0; i < AnimacionFade.length; i++){
        AnimacionVelozDownIn[i].style.animation = 'Veloz-Down-In 1s ease';
        AnimacionVelozIn[i].style.animation = 'Veloz-Left-In 1.5s ease';
        AnimacionVelozRightIn[i].style.animation = 'Veloz-Right-In 2s ease';
    }

    mount()
});

prev.addEventListener('click', () => {
    unmount()
    
    if(index <= 0){
        index = slider_content.length - 1;
    }
    else {
        index--
    }

    for (var i=0; i < AnimacionFade.length; i++){
        AnimacionVelozDownIn[i].style.animation = 'Veloz-Down-In 1s ease';
        AnimacionVelozIn[i].style.animation = 'Veloz-Left-In 1.5s ease';
        AnimacionVelozRightIn[i].style.animation = 'Veloz-Right-In 2s ease';
    }

    mount()
});

mount()

TweenMax.from(".Contenedor-Black", 1,{
    opacity: 0,
    x: -400,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".FotoPerfil", 2, {
    opacity: 0,
    delay: 2.9,
    x: 400,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".Info-Text", 2, {
    opacity: 0,
    y: -300,
    ease: Expo.easeInOut
})