let note = prompt("write ur note");

note = Number(note);

let message ;
if (note<10) {
    message = "insuffiant";
}else if (note<=12){
    message = "passable";
}else message = "bien";


alert(message)