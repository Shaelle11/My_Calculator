function switchMode() {
    const button = document.getElementsByClassName("press")[0];
    const bulb = document.getElementsByClassName("bulb")[0];
    const moon = document.getElementsByClassName("darkicon")[0];
    const body = document.getElementsByClassName('body')[0];
    const container = document.getElementsByClassName("Calculator")[0];
    const modeToggle = document.getElementsByClassName("mode_toggle")[0];
    const display = document.getElementsByClassName("displaystyle")[0];
    const answer = document.getElementsByClassName("answer")[0];
    const input = document.getElementsByClassName("input");
    const del = document.getElementsByClassName("lightclear")[0];
    const top = document.getElementsByClassName("top");

    button.classList.toggle("pressslide");
    bulb.style.display = bulb.style.display === "none" ? "block" : "none";
    moon.style.display = moon.style.display === "block" ? "none" : "block";
    body.classList.toggle("bodydark");
    container.classList.toggle("Calculatordark");
    modeToggle.classList.toggle("mode_toggledark");
    display.classList.toggle("displaydark");
    answer.classList.toggle("answerdark");
    del.classList.toggle("darkclear");
    
    for (var i = 0; i < input.length; i++) {
        input[i].classList.toggle("inputdark");
    }
    for (var i = 0; i < top.length; i++) {
        top[i].classList.toggle("topdark");
    }
}