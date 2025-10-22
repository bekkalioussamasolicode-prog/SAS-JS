function maxx(nb1, nb2, nb3) {
  let max;
  if (nb1 > nb2) {
    max = nb1;
  } else {
    max = nb2;
  }
  if (max > nb3) {
    return max;
  } else {
    return nb3;
  }
}

let max = function maxx(nb1, nb2, nb3) {
  let max;
  if (nb1 > nb2) {
    max = nb1;
  } else {
    max = nb2;
  }
  if (max > nb3) {
    return max;
  } else {
    return nb3;
  }
};
let nbb1 = +prompt("number1");
let nbb2 = +prompt("number2");
let nbb3 = +prompt("number3");
alert(max(nbb1, nbb2, nbb3));
