"use strict";

const input = document.querySelector("#input");
const listOfNotes = document.querySelector(".list");
const worningElement = document.querySelector(".worning");
// Selecting buttons
const resetButton = document.querySelector(".reset");
const addButton = document.querySelector(".add");
const trashButton = document.querySelector(".trash");
const corssButton = document.querySelector(".cross");

let rotateAngel = 360;
let randomNumberColor, inputValue;

const noteColors = [
  "fec5bb",
  "fcd5ce",
  "fae1dd",
  "f8edeb",
  "e8e8e4",
  "d8e2dc",
  "ece4db",
  "ffe5d9",
  "ffd7ba",
  "fec89a",
];

function addNote(event) {
  if (event.keyCode === 13 || event.detail === 1) {
    inputValue = input.value;
    if (inputValue === "") {
      worningElement.classList.remove("hidden");
      setTimeout(function () {
        worningElement.style.top = "20px";
      }, 10);
      setTimeout(function () {
        worningElement.classList.add("hidden");
        worningElement.style.top = "-100px";
      }, 6000);
    } else {
      //random color background
      randomNumberColor = Math.trunc(Math.random() * (noteColors.length + 1));

      //animated add button
      addButton.style.transform = "scale(1.4, 1.4)";
      setTimeout(function () {
        addButton.style.transform = "scale(1, 1)";
        //Add note to list
        listOfNotes.insertAdjacentHTML(
          "afterbegin",
          `<div style="background: #${noteColors[randomNumberColor]}" class="note">
      <div class="text-wrap">${inputValue}</div>
      <button class="button trash" onclick="deleteNote(this)"></button>
    </div>`
        );
      }, 300);
      input.value = "";
    }
  }
}

function resetNotes() {
  resetButton.style.transform = `rotate(${rotateAngel}deg)`;
  rotateAngel += 360;

  //disappear animation
  listOfNotes.style.opacity = 0;

  setTimeout(function () {
    listOfNotes.textContent = " ";
    listOfNotes.style.opacity = 1;
  }, 600);
}

function deleteNote(element) {
  //Selecting note
  const note = element.parentNode;

  //disappear animation
  note.style.opacity = 0;
  note.style.transform = `rotate(-45deg)`;
  setTimeout(function () {
    note.remove();
  }, 650);
}

corssButton.addEventListener("click", function () {
  console.log("tak");
  worningElement.classList.add("hidden");
  worningElement.style.top = "-100px";
});
addButton.addEventListener("click", addNote);
input.addEventListener("keyup", addNote);
resetButton.addEventListener("click", resetNotes);
