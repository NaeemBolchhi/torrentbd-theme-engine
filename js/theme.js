function forceDark() {
    localStorage.setItem("theme","dark");
    document.getElementById("lightCSS").removeAttribute("media");
    document.getElementById("lightCSS").setAttribute("type","null");
    document.getElementById("darkCSS").removeAttribute("media");
    document.getElementById("darkCSS").setAttribute("type","text/css");
    document.getElementById("autoCSS").setAttribute("type","null");
}
function forceLight() {
    localStorage.setItem("theme","light");
    document.getElementById("darkCSS").removeAttribute("media");
    document.getElementById("darkCSS").setAttribute("type","null");
    document.getElementById("lightCSS").removeAttribute("media");
    document.getElementById("lightCSS").setAttribute("type","text/css");
    document.getElementById("autoCSS").setAttribute("type","null");
}
function forceAuto() {
    localStorage.clear();
    document.getElementById("darkCSS").setAttribute("media","(prefers-color-scheme: no-preference), (prefers-color-scheme: dark)");
    document.getElementById("darkCSS").setAttribute("type","text/css");
    document.getElementById("lightCSS").setAttribute("media","(prefers-color-scheme: light)");
    document.getElementById("lightCSS").setAttribute("type","text/css");
    document.getElementById("autoCSS").setAttribute("type","text/css");
}

var themeChoice = localStorage.getItem("theme");
if (!themeChoice) {return;}
if (themeChoice == "light") {
    forceLight();
} else {
    forceDark();
}