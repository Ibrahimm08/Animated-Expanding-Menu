
function OpenMenu(){
    console.log("active");

    var NavCapsule = document.getElementById("FancyNav");
    var NavBtn = document.getElementById("NavBtn");
    
    NavBtn.classList.toggle("btnActive");
    NavCapsule.classList.toggle("menu");
    
    var Links =document.querySelectorAll(".Links");
    Links.forEach(elem => elem.classList.toggle("show"));
}