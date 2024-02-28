import { CIPOLISTA } from "./adat.js";
import { consolra_cipok,felsorolasOsszeallit,dives_feladat, osszegzos_feladat, legdragabb_feladat, db_feladat } from "./fuggveny.js";

console.log(CIPOLISTA)
/* Írd ki a consolra a cipőlista típusait! Mehet mellé az ár is! */
consolra_cipok(CIPOLISTA)

/* HTML DOM-ba írjuk ki felsorolásba */
/* 1. Megfogjuk a html megfelelő elemét */
const CIPOKELEM = document.querySelector("#cipok")
console.log(CIPOKELEM)

/* 2. Összeállítjuk a html kódot, és */
let txt = felsorolasOsszeallit(CIPOLISTA)

/* 3. Beletesdzük az elembe */
CIPOKELEM.innerHTML="<h3>Szép nap van!</h3>";
CIPOKELEM.innerHTML += txt;

/* 4. Feladat */
const CIPOK = document.querySelector("#dives")
let text = dives_feladat(CIPOLISTA)
CIPOK.innerHTML += text;

/* 5. Feladat */
const OSSZEGZES = document.querySelector("#osszegzes")
let osszar = osszegzos_feladat(CIPOLISTA)
OSSZEGZES.innerHTML += `<p> A termékek összára: ${osszar} </p>`;
let legdragabb = legdragabb_feladat(CIPOLISTA)
OSSZEGZES.innerHTML += `<p> A legdragabb termek neve: ${CIPOLISTA[legdragabb].nev} </p>`;
let db = db_feladat(CIPOLISTA)
OSSZEGZES.innerHTML += `<p> Hány Körömcipő van?: ${db} </p>`;