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

let nextIcon = `circle.svg`;

if (currentPlayer===`circle`) {
    playerIcon.src=nextIcon //přidá ikonu o za Hraje:
}


// if (currentPlayer!==`circle`) {
//     playerIcon.src=`cross.svg`
// }
// else {
//     playerIcon.src=`cross.svg`
// }
// if (currentPlayer= ==`cross`) {
//     playerIcon.src=`cross.svg`
// }

const crossOrCircle = (event) => {
    const player=event.target.classList
   
    if (currentPlayer===`circle`) {
        player.value= player.value +` ` +`board__field--circle`;
        currentPlayer=`cross`;
        event.target.disabled=true;
        nextIcon=`cross.svg`;
        // playerIcon=`cross.svg`;
        

    } else {
        // currentPlayer!==`circle`;
        //  player.value=`board__field--cross`;
        // currentPlayer=`circle`;
        player.src=`circle.svg`;
        // event.target.disabled=true;
        currentPlayer===`cross`;
         player.value=player.value +` ` +`board__field--cross`; //vytváří křížky na button
        currentPlayer=`circle`;
        // player.src=`cross.svg`;
        event.target.disabled=true;
        nextIcon=`circle.svg`;
       
    }
    playerIcon.src=nextIcon //přidá ikonu o za Hraje:

};
one.addEventListener(`click`,crossOrCircle);
two.addEventListener(`click`,crossOrCircle);
three.addEventListener(`click`,crossOrCircle);
 four.addEventListener(`click`,crossOrCircle);
 five.addEventListener(`click`,crossOrCircle);
six.addEventListener(`click`,crossOrCircle);
seven.addEventListener(`click`,crossOrCircle);
eight.addEventListener(`click`,crossOrCircle);
nine.addEventListener(`click`,crossOrCircle);
ten.addEventListener(`click`,crossOrCircle);

// naprogramování zpětného tlačítka
const restart=document.querySelector(`.zpet`)


restart.addEventListener(`click`, (event) => {
    if (window.confirm (`Opravdu chceš začít znuvu?`)===true) {
        window.close();
    } else {
      event.preventDefault();
    }

})