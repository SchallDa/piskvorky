import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";
const playerIcon = document.querySelector(`#hraje-icon`);

let nextIcon = `circle.svg`;
let currentPlayer = `circle`;

if (currentPlayer === `circle`) {
  playerIcon.src = nextIcon;
}

const crossOrCircle = (event) => {
  const player = event.target.classList;

  if (currentPlayer === `circle`) {
    player.value = player.value + ` ` + `board__field--circle`;
    currentPlayer = `cross`;
    event.target.disabled = true;
    nextIcon = `cross.svg`;
  } else {
    player.src = `circle.svg`;
    currentPlayer === `cross`;
    player.value = player.value + ` ` + `board__field--cross`;
    currentPlayer = `circle`;
    event.target.disabled = true;
    nextIcon = `circle.svg`;
  }
  playerIcon.src = nextIcon; //přidá ikonu o za Hraje:
  isGameOver();
};
// naprogramování tlačítka "Zpět"
// const restart=document.querySelector(`.zpet`)
// restart.addEventListener(`click`, (event) => {
//     if (window.confirm (`Opravdu chceš začít znuvu?`)===true) {
//         window.location.reload();
//     }

// })

// přidání fce pro všechna tlačítka .pole
const playGroundElm = document.querySelectorAll(`.pole`);
const playArrayElm = Array.from(playGroundElm);
playArrayElm.forEach((pole) => {
  pole.addEventListener("click", crossOrCircle);
});


// nalezení vítěze (přidání fce isGameOver do crossOrCircle, aby se jednotlivá políčka procházela periodicky po každém kliknutí, nikoliv jen na začátku)
const isGameOver = () => {
  const oAndXSymbols = playArrayElm.map((pole) => {
    if (pole.classList.contains(`board__field--circle`)) {
      return `o`;
    }
    if (pole.classList.contains(`board__field--cross`)) {
      return `x`;
    } else {
      return `_`;
    }
  });
  console.log(oAndXSymbols);

  const winner = findWinner(oAndXSymbols);
  if (winner === `o`) {
    alert(`Vyhrálo kolečko`);
  } else if (winner === `x`) {
    alert(`Vyhrál křížek`);
  } else if (winner === `tie`) {
    alert(`Hra skončila nerozhodně.`);
  }
  // else if (winner===null) {
  //     alert(`Hra ještě probíhá`)
  // }
  console.log(winner);
};
