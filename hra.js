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
    if (!isGameOver()) {
      oVsAI(); // volání fce z úkolu 5
    }
  } else {
    player.src = `circle.svg`;
    currentPlayer === `cross`;
    player.value = player.value + ` ` + `board__field--cross`;
    currentPlayer = `circle`;
    event.target.disabled = true;
    nextIcon = `circle.svg`;
    isGameOver();
  }
  playerIcon.src = nextIcon; //přidá ikonu o za Hraje:

};
// naprogramování tlačítka "Zpět"
const restart=document.querySelector(`.zpet`)
restart.addEventListener(`click`, (event) => {
    if (window.confirm (`Opravdu chceš začít znuvu?`)===true) {
        window.location.reload();
    }
})

// přidání fce pro všechna tlačítka .pole
const playGroundElm = document.querySelectorAll(`.pole`);
const playArrayElm = Array.from(playGroundElm);
playArrayElm.forEach((pole) => {
  pole.addEventListener("click", crossOrCircle);
});
// vytvoření fce pro nalezení vítěze, použití v úkolu 5 pro board:
const mapField =() => {
return playArrayElm.map((pole) => {
  if (pole.classList.contains(`board__field--circle`)) {
    return `o`;
  }
  if (pole.classList.contains(`board__field--cross`)) {
    return `x`;
  } else {
    return `_`;
  }
});
}


// nalezení vítěze (přidání fce isGameOver do crossOrCircle, aby se jednotlivá políčka procházela periodicky po každém kliknutí, nikoliv jen na začátku)
const isGameOver = () => {
  const oAndXSymbols = mapField();
  console.log(oAndXSymbols);
  const winner = findWinner(oAndXSymbols);
  if (winner === `o`) {
    setTimeout (() => {
    alert(`Vyhrálo kolečko.`);
    location.reload();
  }, 300);
  } else if (winner === `x`) {
    setTimeout (() => {
        alert(`Vyhrál křížek.`);
        location.reload();
      }, 300);
  } else if (winner === `tie`) {
    setTimeout (() => {
        alert(`Hra skončila neroznodně.`);
        location.reload();
      }, 300);
  }
  console.log(winner);

// pro úkol 5, aby to po skončení hry neukazovalo v konzoli 404
      return winner!==null;
  

};

  //Úkol 5
  const oVsAI = () => {
const fields = document.querySelectorAll('.pole')
fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
method: 'POST',
	headers: {
		'Content-type': 'application/json',
	},
	body: JSON.stringify({
		board: mapField(),
		player: 'x', 
	}),
})
	.then((response) => response.json())
	.then((data) => {
    console.log(data);
		const { x, y } = data.position 
		const field = fields[x + y * 10] 
		field.click() 
	})
  console.log(fields)

};