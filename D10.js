
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log('---ES A---');
let a = 1;
let b = 20;
let sum = a + b;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log('---ES B---');

let random = Math.floor(Math.random() * 21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log('---ES C---');

const me = {
  name: 'Valentina',
  surname: 'Rizzo',
  Age: 21,
}

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log('---ES D---');

delete me.Age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log('---ES E---');

me.skills = ['JS beginner, HTML5, CSS'];

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log('---ES F---');

me.skills.push('Pare mentali');

console.log(me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log('---ES G---');

me.skills.pop();

console.log(me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log('---ES 1---');

//attenzione al 1-6 quindi +1 fuori

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('---ES 2---');

function whoIsBigger(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else if (numero1 === numero2) {
    return 'I numeri sono uguali, e il loro valore è:  ' + numero1;
  } else {
    return numero2;
  }
}

//controllo

console.log(whoIsBigger(10, 50)); //caso if
console.log(whoIsBigger(70, 10)); // caso else
console.log(whoIsBigger(10, 10)); // caso else if



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('---ES 3---');

function splitMe(str) {
  const myArray = str.split(' ');

  return myArray;
}

console.log(splitMe('Mi piace surfare'));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('---ES 4---');

function deleteOne(str, booeleanNumb) {
  if (booeleanNumb == true) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}

console.log(deleteOne('Vale', true));
console.log(deleteOne('Vale', false));


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('---ES 5---');

function onlyLetters(str) {
  let riga = '';
  const rigaArr = str.split('');

  for (let i = 0; i < rigaArr.length; i++) {
    let lettere = str[i];
    if ((lettere.toLowerCase() >= 'a' && lettere.toLowerCase() <= 'z') || lettere === ' ') {
      riga += lettere;
    }
  }
  return riga;
}


console.log(onlyLetters('123456abcdef'));
console.log(onlyLetters('ho 3 gatti'));


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log('---ES 6---');

function isThisAnEmail(str) {
  const regexDellaEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexDellaEmail.test(str);
}

console.log(isThisAnEmail('cioao@mondo.it'));
console.log(isThisAnEmail('ciao@modo'));
console.log(isThisAnEmail('ciao.modo@ciao'));
console.log(isThisAnEmail('ciao@mondo'));



/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('---ES 7---');

function whatDayIsIt() {
  const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const giornoOdierno = new Date().getDay();

  return giorniSettimana[giornoOdierno];
}

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

/*function dice(){
  return Math.floor(Math.random()*6)+1;
}*/

console.log('---ES 8---');


function rollTheDices(numeroCasuale) {
  let valoriDado = [];
  let sommaTotale = 0;
  const risultati = {};

  for (let i = 0; i < numeroCasuale; i++) {
    let risultatoDadi = dice(numeroCasuale);
    sommaTotale += risultatoDadi;
    valoriDado[i] = risultatoDadi;
  }

  risultati.sum = sommaTotale;
  risultati.values = valoriDado;
  return risultati;

}

console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('---ES 9---');

function howManyDays(date) {
  const oggi = new Date();
  let differenzaDelTempo = oggi - new Date(date);

  //console.log(differenzaDelTempo); 2200555955 millisecondi, millisecondi secondi ore

  let differenzaDate = differenzaDelTempo / (1000 * 3600 * 24);

  //console.log(differenzaDate); ----- 25.47

  return Math.floor(differenzaDate);

}

console.log(howManyDays('2024-10-21'));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('---ES 10---');

let giornoOggi = 15;
let meseOggi = 11;

function isTodayMyBirthday() {
  let oggi = new Date();

  oggi.getMonth() + 1;
  oggi.getDay() + 1;

  if (giornoOggi === 21 && meseOggi === 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isTodayMyBirthday())

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log('---ES 11---');

//const newMovieArr= [];
function deleteProp(oggetto, str) {
  const newObj = { ...oggetto };
  delete newObj[str];
  return newObj;
}

const nuovoFilm = {
  Title: 'ciao',
  Year: '2001',
  imdbID: 'tt0120737',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
};

const filmRandom = deleteProp(nuovoFilm, 'Poster');
console.log(filmRandom);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('---ES 12---');

function newestMovie(movies) {
  return movies.reduce(function (piuVecchio, piuGiovane) {
    if (parseInt(piuGiovane.Year) > parseInt(piuVecchio.Year)) {
      return piuGiovane;
    } else {
      return piuVecchio;
    }
  })
}

const mostaIlFilmRecente = newestMovie(movies);
console.log(mostaIlFilmRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('---ES 13---');


function countMovies(movies) {
  return movies.length;
}

const numeroDiFilm = countMovies(movies);
console.log(numeroDiFilm);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log('---ES 14---');

function onlyTheYears(movies) {
  const anni = [];
  for (let i = 0; i < movies.length; i++) {
    anni.push(movies[i].Year);
  }

  return anni;
}

const anni = onlyTheYears(movies);
console.log(anni);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('---ES 15---');

function onlyInLastMillennium(movies) {
  let filmProdotti = [];
  for (let i = 0; i < movies.length; i++) {
    let anno = parseInt(movies[i].Year);
    if (anno >= 1001 && anno <= 2000) {
      filmProdotti.push(movies[i]);
    }
  }
  return filmProdotti;
}

const filmDelMillenioScorso = onlyInLastMillennium(movies);
console.log(filmDelMillenioScorso);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('---ES 16---');

function sumAllTheYears(movies) {
  let somma = 0;
  for (let i = 0; i < movies.length; i++) {
    somma += parseInt(movies[i].Year);
  }
  return somma;
}

const sommaTotaleAnni = sumAllTheYears(movies);
console.log(sommaTotaleAnni);


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/


console.log('---ES 17---');

function searchByTitle(str) {
  const filmTrovati = [];
  const cercaStringa = str.toLowerCase();
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(cercaStringa)) {
      filmTrovati.push(movies[i]);
    }
  }
  return filmTrovati;
}

console.log(searchByTitle("Avengers"));

//se rimane tempo aggiungi la possibità di trovare anche in base alle minuscole


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log('---ES 18---');

function searchAndDivide(str) {
  const nuovoArrTitoli = {
    match: [],
    unmatch: []
  }
  const cercaStringa = str.toLowerCase();
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(cercaStringa)) {
      nuovoArrTitoli.match.push(movies[i].Title);
    } else {
      nuovoArrTitoli.unmatch.push(movies[i].Title);
    }
  }
  return nuovoArrTitoli;
}

console.log(searchAndDivide('Avengers'));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log('---ES 19---');

function removeIndex(i) {
  movies.splice(i, 1);

  return movies
}

console.log(removeIndex(7));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function contenitore() {
  const container = document.getElementById('container');
  return container;
}

contenitore();


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function tabella() {
  const cellaTabella = document.querySelectorAll('td');
  return cellaTabella;
}

tabella();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('---ES 22---');

function contenutoTd() {
  const elementiTd = document.querySelectorAll('td');
  elementiTd.forEach((td) => {
    console.log(td.innerHTML);
  })
}

contenutoTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function aggiungiSfondo() {
  const link = document.querySelectorAll('a');
  link.forEach((link) => {
    link.style.backgroundColor = 'red';
  })
}

aggiungiSfondo();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function elementoExtra() {
  const lista = document.getElementById('myList');
  let nuovoElemento = document.createElement('li');
  nuovoElemento.innerHTML = 'Sono aggiunto correttamente';
  lista.appendChild(nuovoElemento);
}

elementoExtra();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLaLista() {
  const lista = document.getElementById('myList');

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

svuotaLaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasse() {
  const celle = document.querySelectorAll('tr');
  celle.forEach(function (e) {
    e.classList.add('test');
  });
}

aggiungiClasse();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log('---ES 27---');

function halfTree(parametro) {
  let riga = '';
  for (let i = 0; i <= parametro; i++) {
    riga += '*';

    console.log(riga);
  }
}

halfTree(3);


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/*
struttura mentale... col for ripeto quindi ripeto spazi
gli spazi sono inversamente piramidali
gli asterischi si posizionano al centro

quindi un for con incremento e l'altro con decremento,
esterni i che sono spazi, interni j che sono * ----NON FUNZIONA

for incremento si i che j ---no

sp2 as1
sp1 as2
sp0 as3




*/

console.log('---ES 28---');

function tree(parametro) {

  for (let j = 1; j <= parametro; j++) {
    let riga = ''.repeat(parametro - 1);
    let asterisco = '*'.repeat(2 * j - 1);
    console.log(riga+asterisco);
  }
}

tree();


function tree2 (parametro){
  for (let i = 1; i <= parametro; i++){
    riga = ''.repeat(parametro -1);
    for(let j = 1; j >=parametro; j--){
      asterisco = '*'.repeat(2* j-1);
    }
  }
}

tree2(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log('---ES 29---');

function numeroPrimo(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return false;
}

console.log(numeroPrimo(17));
/* Questo array viene usato per gli esercizi. Non modificarlo. */
