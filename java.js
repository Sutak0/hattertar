function Csuszka(){

    var csuszka = document.getElementById('csuszka');
    document.querySelector("p").innerHTML = csuszka.value.toString();
}

function Szamolas(){

    ujertek = document.getElementById("ujertek").value;
    mertek = document.getElementById("mertek").value;
    csuszka = document.getElementById("csuszka").value;
    osszeg = document.getElementById("osszeg").value;
    osszeg2 = csuszka;

    eredmeny = document.getElementById("eredmeny");
    if (mertek != "Mb"){
        if(mertek != "Gb"){
            osszeg = osszeg * 1000
        }
        if(mertek != "Tb"){
            osszeg = osszeg * 1000000
        }
    }

    if (ujertek != "Mbps"){
        if (ujertek != "Kbps"){
            osszeg2 = osszeg2 / 1000
        }
        if (ujertek != "mbps"){
            osszeg2 = osszeg2 / 10
        }
        if (ujertek != "Gbps"){
            osszeg2 = osszeg2 * 1000
        }

    }

    eredmeny.innerHTML = osszeg/osszeg2;


}