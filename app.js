// visa vilken sida som är aktiv

document.getElementById("active").style.color = "#00E8FF";

//popup funktion på info korten

var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

//Läs mer knappen för att få upp popupen

var popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtns, i) => {
    popupBtns.addEventListener("click", () => {
        popup(i);
    });
});

//X knappen för att stänga ner popupen

closeBtns.forEach((closeBtns) => {
    closeBtns.addEventListener("click", () => {
        popupViews.forEach((popupView) =>{
            popupView.classList.remove('active');
        });
    });
});

