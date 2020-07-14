document.addEventListener("DOMContentLoaded", () => {
  let table = document.querySelector(".table");
  let objects = document.querySelectorAll(".col");
  let input = document.querySelector(".form-control");
  let btnCapit = document.querySelector(".btn--capitalize");
  let btnColor = document.querySelector(".btn--color");
  let btnSort = document.querySelector(".btn--sort");
  let btnRandom = document.querySelector(".btn--random");

  //capitalize fn
  const capitalize = () => {
    let capitArr = [...objects].map((elem) => {
      return elem.textContent;
    });
    for (let i = 0; i < objects.length; i++) {
      if (
        document.getElementsByClassName("col")[i].innerHTML !==
        objects[i].innerHTML.toUpperCase()
      ) {
        objects[i].innerHTML = capitArr[i].toUpperCase();
      } else {
        objects[i].innerHTML =
          capitArr[i].toLowerCase().substr(0, 1).toUpperCase() +
          capitArr[i].toLowerCase().substr(1);
      }
    }
  };

  //color fn
  const color = () => {
    objects.forEach((elem) => {
      elem.classList.toggle("text-primary");
    });
    table.classList.toggle("bg-warning");
  };

  //sort
  const sort = () => {
    let newArray = [...objects].map((elem) => {
      return elem.textContent;
    });

    let sortArray = newArray.sort();

    for (let i = 0; i < objects.length; i++) {
      objects[i].innerHTML = sortArray[i];
    }
  };

  //randomize fn
  let numbArray = [];
  const randomize = () => {
    let getRandom = () => {
      return Math.floor(Math.random() * (7 - 1) + 1);
    };
    let number = getRandom();
    if (numbArray.indexOf(number) === -1) {
      numbArray.push(number);
    }
    console.log(number);
    console.log(numbArray);
  };

  btnCapit.addEventListener("click", capitalize);
  btnColor.addEventListener("click", color);
  btnSort.addEventListener("click", sort);
  btnRandom.addEventListener("click", randomize);
});
