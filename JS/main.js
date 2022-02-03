let n1,n2,n3,n4,n5;
let ergebnis;
let summe = 0;
let anzahlNoten = 0;
/* variablen festlegen */
function tfAuslesen () {
    n1= parseInt(document.getElementById( "tfnote1").value);
    n2= parseInt(document.getElementById( "tfnote2").value);
    n3= parseInt(document.getElementById( "tfnote3").value);
    n4= parseInt(document.getElementById( "tfnote4").value);
    n5= parseInt(document.getElementById( "tfnote5").value);
    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" +n5);
/* Textfeld wird dem Wert der Variable zugewiesen */
    punktePruefen(n1)
    punktePruefen(n2)
    punktePruefen(n3)
    punktePruefen(n4)
    punktePruefen(n5)

    ergebnis = summe / anzahlNoten; // Formel für Durchschnitt

    document.getElementById("ausgabe").innerHTML = ergebnis;
    document.getElementById("ausgabe").style.color ="crimson"
    if(ergebnis <= 5 )
    {
        document.getElementById("ausgabe").style.color ="crimson"
    }
    if(ergebnis >5 && ergebnis <12)
    {
        document.getElementById("ausgabe").style.color ="orange"
    }
    if(ergebnis >= 12)
    {document.getElementById("ausgabe").style.color ="green"}
} //Farben den jeweiligen Ergebnissen zugewiesen
function punktePruefen(punkte) {
    if(isNaN(punkte)) {
        console.log(punkte + " ist keine Zahl!")
    }else if(punkte >= 0 && punkte <= 15){
        summe = summe + punkte;
        anzahlNoten = anzahlNoten + 1;
    }else{
        console.log(punkte + "Sind keine gültigen Notenpunkte!")
    }
} // Filtern der Eingabe
//Änderung


