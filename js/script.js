var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");
btnGenera.addEventListener("click",
    function(){
        // Prendo i valori campi input e select
        var nome = document.getElementById("nome").value;
        var km = parseInt(document.getElementById("km").value);
        var fascia = document.getElementById("fascia").value;
        // Calcolo il prezzo in base alla fascia d'età
        if ( nome != "" && !isNaN(km) && km > 0 && fascia != ""){
            var prezzo = km * 0.21;
            var sconto = 0;
            var offerta;
            if (fascia == "minorenne") {
                //sconto -20%
                offerta = "Sconto Minorenne";
                sconto = prezzo * 0.2;
            } else if (fascia == "over") {
                //sconto -40%
                offerta = "Sconto Silver";
                sconto = prezzo * 0.4;
            } else {
                offerta = "Biglietto Standard";
            }
            prezzo -= sconto;

            // creo funzione per generare numeri random in intervallo
            function between(min, max) {  
                return Math.floor(
                Math.random() * (max - min) + min
                );
            }
            // stampo i dati
            document.getElementById("nome-passeggero").innerHTML = nome;
            document.getElementById("offerta").innerHTML= offerta;
            document.getElementById("carrozza").innerHTML = between(1, 9);
            document.getElementById("cod-cp").innerHTML = between(1, 9999);
            document.getElementById("costo").innerHTML = prezzo.toFixed(2) + "€";

            // mostro il biglietto

            document.getElementById("biglietto").classList.add("open");
        }      
        else {
            alert("Errore nella compilazione. Ricarica la pagina.")
        }
    }
);

// Bottone annulla
btnAnnulla.addEventListener("click",
    function(){
        document.getElementById("biglietto").classList.remove("open");
        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia").value = "";
    }
);