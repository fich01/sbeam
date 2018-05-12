(function(){
    var nav = document.getElementById("main-nav");
    var hamburger = document.getElementById("menuClick");
    var clicked = false;
    
    hamburger.addEventListener("click", function(e) {
        e.preventDefault();
        if(clicked){
            nav.style.visibility = "hidden";
            nav.style.opacity = "0";
            clicked = false;
        } else{
            nav.style.visibility = "visible";
            nav.style.opacity = "1";
            clicked = true;
        }
        
    });
    
    if(window.innerWidth > 768){
        nav.style.visibility = "visible";
        nav.style.opacity = "1";
    }
    
    if(window.addEventListener){
        window.addEventListener("resize", function() {
            if(window.innerWidth > 768){
                nav.style.visibility = "visible";
                nav.style.opacity = "1";
            } else{
                nav.style.visibility = "hidden";
                nav.style.opacity = "0";
            }
        })
    }
})();
