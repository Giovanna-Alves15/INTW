function carrega_txt() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("teste").innerHTML = this.responseText;
    }
    xhttp.open("GET", "info.txt");
    xhttp.send();
}