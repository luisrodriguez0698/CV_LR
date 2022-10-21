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


// window.addEventListener('scroll', function(){
//     let animacion = document.getElementById('SeccionSkills');
//     let PosicionIMG = animacion.getBoundingClientRect().top;
//     console.log(PosicionIMG);

//     let tamañoDePantall = this.window.innerHeight/3;
//     if(PosicionIMG < tamañoDePantall){
//         animacion.style.animation = 'Prueba 1s ease-out'
//     }
// })

