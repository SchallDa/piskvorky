let currentPlayer=`circle`;
const one=document.getElementById(`one`);
const two=document.querySelector(`#two`);
const three=document.querySelector(`#three`);
const four=document.querySelector(`#four`);
const five=document.querySelector(`#five`);
const six=document.querySelector(`#six`);
const seven=document.querySelector(`#seven`);
const eight=document.querySelector(`#eight`);
const nine=document.querySelector(`#nine`);
const ten=document.querySelector(`#ten`);
const playerIcon=document.querySelector(`#hraje-icon`);

if (currentPlayer===`circle`) {
    playerIcon.src=`circle.svg`
}

const crossOrCircle = (event) => {
    const player=event.target.classList

    if (currentPlayer===`circle`) {
        hraje.src=`cross.svg`;
        player.value=`board__field--circle`;
        currentPlayer=`cross`
       hraje.scr=`circle.svg`;
        

    } else {
        currentPlayer===`cross`
       hraje.src=`cross.svg`;
        player.value=`board__field--cross`;
        currentPlayer=`circle`;
        player.src=`circle.svg`;

    }
};
one.addEventListener(`click`,crossOrCircle);
two.addEventListener(`click`,crossOrCircle);
three.addEventListener(`click`,crossOrCircle);
four.addEventListener(`click`,crossOrCircle);
six.addEventListener(`click`,crossOrCircle);
seven.addEventListener(`click`,crossOrCircle);
eight.addEventListener(`click`,crossOrCircle);
nine.addEventListener(`click`,crossOrCircle);
ten.addEventListener(`click`,crossOrCircle);

