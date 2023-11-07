function clickbtn1(){
    let div = document.querySelector("#table");
    carregar_arquivo("2020.html", div);
}
    function carregar_arquivo(url, Xelement){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200){
            Xelement.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}


function clickbtn2(){
    let div = document.querySelector("#table");
    carregar_arquivo("2010.html", div);
}
    function carregar_arquivo(url, Xelement){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200){
            Xelement.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}

function clickbtn3(){
    let div = document.querySelector("#table");
    carregar_arquivo("2000.html", div);
}
    function carregar_arquivo(url, Xelement){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200){
            Xelement.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}

function clickbtn4(){
    let div = document.querySelector("#table");
    carregar_arquivo("90.html", div);
}
    function carregar_arquivo(url, Xelement){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200){
            Xelement.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}

function clickbtn5(){
    let div = document.querySelector("#table");
    carregar_arquivo("80.html", div);
}
    function carregar_arquivo(url, Xelement){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200){
            Xelement.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}

function clickbtn6(){
    let div = document.querySelector("#table");
    carregar_arquivo("70.html", div);
}
    function carregar_arquivo(url, Xelement){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200){
            Xelement.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}

function clickbtn7(){
    let div = document.querySelector("#table");
    carregar_arquivo("60.html", div);
}
    function carregar_arquivo(url, Xelement){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200){
            Xelement.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}