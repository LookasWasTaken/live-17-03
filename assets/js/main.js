/* Creare una griglia 8x8

 Ogni volta che clicco su un quadrato si colora di verde */

// Creo una variabile dove salvo il container delle 64 celle (container-grid)

const container = document.querySelector(".container");

// creo un max numero di celle

let nMax = 64;

// creo un ciclo n volte per le celle (dove n in questo caso sta per 64)

for (let i = 0; i < nMax; i++) {
  const cell = `<div class="cell"></div>`;
  container.innerHTML += cell;
}

// seleziono una cella che ha classe cell e active

const cellEl = document.querySelectorAll(".cell")

// aggiungo eventlisner per la classe active ciclando per la lunghezza dell'array cellEl


for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];
    console.log(thisCell)
    thisCell.addEventListener("click", function() {
        thisCell.classList.toggle("bg_green")
        // this.classList.add("active")
        console.log("Changed the color")
    })


    
}
