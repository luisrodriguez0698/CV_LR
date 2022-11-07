if(document.getElementById("Btn-Modal-Proyect-1")){

    var modal = document.getElementById("Modal-Proyect-1");
    var btn = document.getElementById("Btn-Modal-Proyect-1");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function(){
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }

}