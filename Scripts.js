
function OpenMenu(){
    console.log("active");
    var NavCapsule = document.getElementById("FancyNav");
    var NavBtn = document.getElementById("NavBtn");
    var Links =document.querySelectorAll("Links");

    NavBtn.classList.toggle("btnActive");
    NavCapsule.classList.toggle("menu");

    Links.forEach(function(el, key){
        Links.classList.toggle("show");        
    });
}