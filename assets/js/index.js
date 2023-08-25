let cardsArray = [
    {
        'name': 'london',
        'img': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        'name': 'disneyland',
        'img': 'https://images.unsplash.com/photo-1605443790760-18c6121939d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
        'name': 'elephant',
        'img': 'https://images.unsplash.com/photo-1603483080228-04f2313d9f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    },
    {
        'name': 'India',
        'img': 'https://images.unsplash.com/photo-1572945015532-741f8c49a7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
    },
    {
        'name': 'tiger',
        'img': 'https://images.unsplash.com/photo-1615824996195-f780bba7cfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    },
    {
        'name': 'nepal',
        'img': 'https://images.unsplash.com/photo-1529733905113-027ed85d7e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVwYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    }
];

const parentDiv = document.querySelector('#card-section');

// step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


let clickCount = 0;
let firstCard = "";
let secondCard = "";



const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}


// step 6

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })

}


// step 3
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if(curCard.id === "card-section"){return false }

    clickCount ++;

    if(clickCount < 3){

        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)

            }else{
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})


// step 1 to add the card
for(let i=0; i<shuffledChild.length; i++){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}

