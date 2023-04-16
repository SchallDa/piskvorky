
const playerIcon=document.querySelector(`#hraje-icon`);

let nextIcon = `circle.svg`;
let currentPlayer=`circle`;

if (currentPlayer===`circle`) {
    playerIcon.src=nextIcon 
}


const crossOrCircle = (event) => {
    const player=event.target.classList
   
    if (currentPlayer===`circle`) {
        player.value= player.value +` ` +`board__field--circle`;
        currentPlayer=`cross`;
        event.target.disabled=true;
        nextIcon=`cross.svg`;
    } else {
        player.src=`circle.svg`;
        currentPlayer===`cross`;
        player.value=player.value +` ` +`board__field--cross`;
        currentPlayer=`circle`;
        event.target.disabled=true;
        nextIcon=`circle.svg`;
       
    }
    playerIcon.src=nextIcon //přidá ikonu o za Hraje:

};
// přidání fce pro všecjna tlačítka .pole
const playGroundElm=document.querySelectorAll(`.pole`);
const playArrayElm=Array.from(playGroundElm);
playArrayElm.forEach ((pole)=> {
    pole.addEventListener("click", crossOrCircle)
});

// naprogramování tlačítka "Zpět"
const restart=document.querySelector(`.zpet`)


restart.addEventListener(`click`, (event) => {
    if (window.confirm (`Opravdu chceš začít znuvu?`)===true) {
        window.location.reload();
    } 

})