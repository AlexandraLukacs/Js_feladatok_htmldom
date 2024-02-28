/* Cipő nyilvántartás
típusa, színe, mérete, ára */
export const CIPOLISTA = [
    {
        tipus:"Nike",
        szin:"fehér",
        meret:[38,39,40,41,42,46],
        ar:34000
    },
    {
        tipus:"Adidas",
        szin:"fekete",
        meret:[42,46],
        ar:44000
    },
    {
        tipus:"Körömcipő",
        szin:"piros",
        meret:[38,39,40,41],
        ar:14000
    }
]

/* CIPOLISTA=[1,1,2] --> ezt nem lehet */

/* CIPOLISTA[0]={nev:"Géza", kor:12}
CIPOLISTA.push({tipus:"új cipő"}) --> ezeket lehet*/

/* console.log(CIPOLISTSA[1].ar)
console.log(CIPOLISTSA[0].meret[1]) */