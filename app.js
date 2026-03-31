let container = document.querySelector(".container");
let slider = document.querySelector(".slider");
let createOpt = document.querySelector(".create");
let notesOpt = document.querySelector(".notes");
let historyOpt = document.querySelector(".history");
let form = document.querySelector(".form");
let textarea = document.querySelector(".text");
let btn = document.querySelector(".btn");
let noteTotal = document.querySelector(".total");
let notesContainer = document.querySelector(".notes-container");

let count = 0;
let notes = [];
let warn = document.createElement("h3");

notesContainer.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (textarea.value === "") {
    warn.innerText = "Please Type Something To Submit !";
    warn.style.color = "red";
    form.appendChild(warn);
  } else {
    warn.innerText = "";
    let note = textarea.value;
    notes.push(note);
    textarea.value = "";
    count++;
    noteTotal.innerText = count;
  }
}); 

notesOpt.addEventListener("click", () => {
  notesOpt.style.backgroundColor = "black";
  createOpt.style.backgroundColor = "grey";

  textarea.style.display = "none";
  btn.style.display = "none";
  notesContainer.style.display = "block";

  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    let p = document.createElement("p");
    let line = document.createElement("hr");

    p.innerHTML = "<b>" + (index + 1) + ".</b> " + note;
    notesContainer.appendChild(p);
    p.appendChild(line);
  });
});

createOpt.addEventListener("click", () => {
  notesOpt.style.backgroundColor = "grey";
  createOpt.style.backgroundColor = "black";

  textarea.style.display = "inline-block";
  btn.style.display = "inline-block";
  notesContainer.style.display = "none";
});





