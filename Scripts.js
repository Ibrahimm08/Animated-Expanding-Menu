
function OpenMenu(){
    console.log("active");
    var NavCapsule = document.getElementById("FancyNav");
    var NavBtn = document.getElementById("NavBtn");

    NavBtn.classList.toggle("btnActive");
    NavCapsule.classList.toggle("menu");
}