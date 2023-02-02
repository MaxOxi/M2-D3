/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
function trovaNPiùGrande(num1,num2){
  if(num1>num2){
  return num1
} else {
  return num2
}
}
console.log(trovaNPiùGrande(5,3))  // stampa 5


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function ControllaSeDiverso(num) {
  if (num !== 5) {
    console.log("not equal");
  }
}

ControllaSeDiverso(3);   // stampa "not equal"

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function controllaSeDivisibilePerCinque(num) {
  if (num % 5 ===  0) {
    console.log("divisible by 5");
  }
}

controllaSeDivisibilePerCinque(10);  // stampa "divisible by 5"

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
function controllaSeUgualeAOtto(num1, num2) {
  if (num1 === 0 || num1 + num2 === 8 || num1 - num2 === 8) {
    return true;
  } else {
    return false; 
  }

}
 
controllaSeUgualeAOtto(4, 5);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function calcolaTotCarrello(totalShoppingCart) {
  let costospedizione; 
  if (totalShoppingCart > 50) {
    costospedizione = 0;
  } else {
    costospedizione = 10;
  }
  return totalShoppingCart + costospedizione;

}

console.log(calcolaTotCarrello(30)) // stampa 40 (30 +10 spedizione visto che ha speso < di 50)


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function calcolaTotCarrello(totalShoppingCart) {
  let costospedizione; 
  if (totalShoppingCart > 50) {
    costospedizione = 0;
  } else {
    costospedizione = 10;
  }
  return totalShoppingCart -(totalShoppingCart * 0.2) + costospedizione;

}              // totale - 20% + costo spedizione

console.log(calcolaTotCarrello(30)) // stampa 34 (40 tot - 6 sconto)  




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

function ordinaNumeri (num1, num2, num3) {
  let numeriOrdinati [num1, num2, num3];
  numeriOrdinati.sort(function(a, b) {
    return b - a;
  })
  console.log(numeriOrdinati);
}

ordinaNumeri(2, 5, 8);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function controllaSeIntero(num) {  

  if (typeof num === "number" && Number.isInteger(num)) {  
    return true; 
  } else {
    return false; 
}
}
console.log(controllaSeIntero(5)); // stampa true
console.log(controllaSeIntero(5.5)); // stampa false
console.log(controllaSeIntero("5")); // stampa false



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function controllaPariDispari(num) {   
  if (num % 2 === 0) { 
    return "pari";
  } else {
    return "dispari"; 
  }
}

console.log(controllaPariDispari(5)); // risultato "dispari"






/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 12;
if (val < 5) { 
  console.log("Meno di 5"); 
} else if (val < 10) {
  console.log("Meno di 10");
} else { 
  console.log("Uguale a 10 o maggiore"); 
}





/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 17;

if (num < 5) { 
  console.log("Tiny"); 
} else { 
  if (num < 10) {
    console.log("Small"); 
  } else { 
    if (num < 15) { 
      console.log("Medium"); 
    } else { 
      if (num < 20) { 
        console.log("Large");
      } else { 
        console.log("Huge"); 
      }
    }
  }
}

// stampa "Large"

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/


let isMale = true;
let gender = isMale ? "male" : "female";

console.log(gender);

// stampa "male"


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

let num = 0;

while (num <= 5) {  
  console.log(num); 
  num++; //per incrementato in numero di 1 (num++).
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

for(var i=0; i <= 10; i++) {
  console.log(i)
}

//stampa
0
1
2
3
4
5
6
7
8
9
10


/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

for(var i=0; i <= 10; i !== 3 ; i !== 8; i++) {
  console.log(i)
}

//stampa
0
1
2
4
5
6
7
9
10



/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for(var i=0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " Pari");
  }
 else { 
   console.log(i + " Dispari");
  }

}

/* stampa

0 Pari
1 Dispari
2 Pari
3 Dispari
4 Pari
5 Dispari
6 Pari
7 Dispari
8 Pari
9 Dispari
10 Pari
11 Dispari
12 Pari
13 Dispari
14 Pari
15 Dispari /*


/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 1; i <= 100; i++) {

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } 
 
  else if (i % 3 == 0) {
    console.log("Fizz");
  } 

  else if (i % 5 == 0) {
    console.log("Buzz");
  } 
  
  else {
    console.log(i);
  }
}


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

let day = 4        // qui bisogna inserire il numero da 1 -7 

switch (day) {      // day = 4, stampa "Giovedì"
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Valore non valido");
}


