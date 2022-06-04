// console.log("HEllo")  Javascript running
let next = document.getElementById("btn");
let display_number = document.getElementById("numberdisplay");
let number_array = [];
let count = 0;
next.addEventListener("click", () => {
  randomnumber();
  count++;
});

function randomnumber () {
  let random = Math.floor(Math.random() * 91);
  console.log(random);
  count = 0;
  for (let index = 0; index < number_array.length; index++) {
    if (random == number_array[index]) {
      count++;
    }
  }
  if (count < 1 && random != 0) {
    display_number.innerHTML = random;
  } else {
    randomnumber();
  }
  number_array.push(random);
  document.getElementById(random).style.color = 'green';
}

