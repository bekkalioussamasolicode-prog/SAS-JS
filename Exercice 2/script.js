let note = prompt("enter votre note");

note = Number(note);

let message = (note < 10) ? "insuffisant" :
              (note <= 12) ? "passable" :
              "bien";

alert(message);