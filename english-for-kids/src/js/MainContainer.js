import cards from "./Cards";

export class MainConatainer {
    
}


const MainContainer = document.createElement('div');
MainContainer.classList.add('main-container');
document.body.append(MainContainer);

const cardContainer = document.createElement('ul');
cardContainer.classList.add('cards-container');
document.querySelector("body > div").append(cardContainer);


// Create Cards
for (let i = 0; i < 8; i++) {  
    const card = document.createElement('li');
    // add card picture and title
    const picture = document.createElement('img');
    const title = document.createElement('h1');
    title.innerText = cards[0][i];
    picture.setAttribute('src', cards[i + 1][0].image)
    card.classList.add('card');
    card.append(picture);
    card.append(title);
    
    document.querySelector("body > div > ul").append(card);
}




// SwitchMode
document.querySelector('#checkbox').addEventListener('change', (event) => {
    if (document.querySelector("#checkbox").checked) {
        document.querySelectorAll('body > div > ul > li').forEach(element => {
        element.classList.add('play');
    });  
    } else {
        document.querySelectorAll('body > div > ul > li').forEach(element => {
            element.classList.remove('play');
        });  
    } 
});




