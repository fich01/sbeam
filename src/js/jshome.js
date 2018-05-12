(function(){
    var kontenjeri = document.getElementsByClassName("card-ext");
    
    var overlay = document.getElementsByClassName("overlay");
    var karticaPrikaz = document.getElementsByClassName("card-ext");

    var overlayData = [1, 0, 0];

    //index je index kliknutog elementa
    function replace(index){
        overlayData[index] = 1;
        for(var i = 0; i < overlayData.length;i++){
            if(i === index){
                continue;
            }else{
                overlayData[i] = 0;
                karticaPrikaz[i].classList.remove("active");
                if(!karticaPrikaz[i].classList.contains("inactive")){
                    karticaPrikaz[i].className += " inactive";
                }
            }
        }

        karticaPrikaz[index].className += " active";
        karticaPrikaz[index].classList.remove("inactive");
    }

    //ako je na pocetku veci od 768
    if(window.innerWidth > 768){
        kontenjeri[1].className += " inactive";
        kontenjeri[2].className += " inactive";
    }


    //kako se ponasa kad se resizea
    window.addEventListener("resize", function(){
        if(window.innerWidth < 768){
            kontenjeri[1].classList.remove("inactive");
            kontenjeri[2].classList.remove("inactive");
            kontenjeri[0].classList.remove("inactive");
        } else{
            for(let i = 0; i < overlayData.length; i++){
                if(overlayData[i] === 1){
                    continue;
                } else{
                    if(!kontenjeri[i].classList.contains("inactive")){
                        kontenjeri[i].className += " inactive";
                    }
                }
            }
        }
    });
    

    for(let i = 0; i < overlay.length; i++){
        overlay[i].addEventListener("click", function(e){
            e.preventDefault();
            if(overlayData[i] == 1){
                return;
            }else{
                replace(i);
            }
        }); 
    }

} )();




