

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

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

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
}


function prepareEmail() {
  const countData = document.getElementById("save-el").textContent;
  const mailtoLink = `mailto:?subject=Count data&body=${countData}`;
  window.location.href = mailtoLink;
}
