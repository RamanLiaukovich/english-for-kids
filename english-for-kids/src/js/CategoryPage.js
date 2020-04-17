export class CategoryPage {
    
}
//Clear Main container
document.querySelectorAll("body > div > ul > li").forEach(element => {
    element.addEventListener('click', function() {
    document.querySelector('body > div').removeChild(document.querySelector('body > div > ul'));

    //create New Page (category page)
    const cardContainer = document.createElement('ul');
    cardContainer.classList.add('cards-container');
    document.querySelector("body > div").append(cardContainer);

// Create Cards
for (let i = 0; i < 8; i++) {  
    const card = document.createElement('li');
    card.classList.add('category-card');
    document.querySelector("body > div > ul").append(card);


}



})
});