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
        if(AlturaAnimacion - 500 < scrollTop){
            AnimacionFade[i].style.opacity = 1;
            AnimacionFade[i].classList.add('Animacion-Fade-Left-In');
        }else{
            AnimacionFade[i].style.opacity = 0;
            AnimacionFade[i].classList.remove('Animacion-Fade-Left-In');
            AnimacionFade[i].classList.add('Animacion-Fade-Left-Out');
        }
    }

}

window.addEventListener('scroll', viewEfectScroll);


// window.addEventListener('scroll', function(){
//     let animacion = document.getElementById('SeccionSkills');
//     let PosicionIMG = animacion.getBoundingClientRect().top;
//     console.log(PosicionIMG);

//     let tamañoDePantall = this.window.innerHeight/3;
//     if(PosicionIMG < tamañoDePantall){
//         animacion.style.animation = 'Prueba 1s ease-out'
//     }
// })

