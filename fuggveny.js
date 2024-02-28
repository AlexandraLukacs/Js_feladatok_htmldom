export function consolra_cipok(lista){
    for (let index = 0; index < lista.length; index++) {
        console.log(`Típus: ${lista[index].tipus}, Ár: ${lista[index].ar}`)
    }
}

export function felsorolasOsszeallit(lista){
    let txt = "<ul>";
    for (let index = 0; index < lista.length; index++) {
        txt += `<li> Típus: ${lista[index].tipus}, Ár: ${lista[index].ar} </li>`
    }
    txt += "</ul>";

    console.log(txt);

    return txt
}

export function dives_feladat(lista){
    let text = "<div class=tarolo>";
    for (let index = 0; index < lista.length; index++) {
        text += `<div class="termek">`
        text += `<h3> ${lista[index].tipus} </h3>`;
        text += `<p> ${lista[index].szin} </p>`;
        text += `<p> ${lista[index].ar} </p>`;
        text += `</div>`
    }
    text += "</div>";
    console.log(text);

    return text
}

export function osszegzos_feladat(lista){
    let osszar = 0;
    for (let index = 0; index < lista.length; index++) {
        osszar += lista[index].ar
    }
    console.log(osszar);
    return osszar
}

export function legdragabb_feladat(lista){
    let legdragabb = 0;
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].ar > lista[legdragabb].ar){
            legdragabb = index
        }
    }
    return legdragabb
}

export function db_feladat(lista){
    let db = 0;
    for (let index = 0; index < lista.length; index++) {
        if(lista[index].nev === "Körömcipő" ){
            db ++;
        }
    }
    return db
}