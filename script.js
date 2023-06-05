// questo mette "countEL" nell'html con id "count-el"
// questo dice da che valore inizia a contare
// questo mette "saveEL" nell'html con id "save-el"

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count + " 👋"
}

function locrement() {
    count -= 1
    countEl.innerText = count
}

function zero() {
    count = 0
    countEl.innerText = count
}


let savedText = ""; // Variabile globale per tenere traccia del testo salvato

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  savedText += countStr; // Aggiungi il testo salvato alla variabile globale savedText così puoi richiamarla in altre funzioni
  count = 0; 
  countEl.innerText = count; // Questo riporta a zero il contatore
}

function sendEmail() {
  var mail = "mailto:";
  var recipient = "youremail";
  var at = String.fromCharCode(64);
  var dotcom = "gmail.com";
  var subject = "?subject=" + "Counting recorded for each cycle";
  var body = "&body=" + savedText; // Utilizza la variabile globale savedText

  window.open(mail + recipient + at + dotcom + subject + body);
}
