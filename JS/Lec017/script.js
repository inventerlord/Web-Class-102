function getDataAjax(){
    const xmlOb = new XMLHttpRequest();

    xmlOb.onload = function() { document.getElementById("data").innerHTML = this.response; }

    xmlOb.open("GET","info.txt");
    xmlOb.send();


}