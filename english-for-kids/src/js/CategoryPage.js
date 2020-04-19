import cards from "./Cards";

export class CategoryPage {
    
}



//Clear Main container
document.querySelectorAll("body > div > ul > li").forEach(element => {
    element.addEventListener('click', function() {
        let arrNum = cards[0].indexOf(event.currentTarget.children[1].innerText);
        document.querySelector('body > div').removeChild(document.querySelector('body > div > ul'));

        //create New Page (category page)
        const categorieHeader = document.createElement('div');
        const categorieName = document.createElement('div');
        const scoreConainer = document.createElement('div');     
        categorieHeader.classList.add('categorie-header');
        categorieName.classList.add('categorie-name');
        categorieName.innerText = event.currentTarget.children[1].innerText;
        scoreConainer.classList.add('categorie-score');
        categorieHeader.append(categorieName);
        categorieHeader.append(scoreConainer);

        const cardContainer = document.createElement('ul');
        cardContainer.classList.add('cards-container');
        document.querySelector("body > div").append(categorieHeader);
        document.querySelector("body > div").append(cardContainer);

        // Create Cards
        for (let i = 0; i < 8; i++) {  
            const card = document.createElement('li');
            card.classList.add('category-card');
            const cardInner = document.createElement('div');
            cardInner.classList.add('card-inner');
            const front = document.createElement('div');
            front.classList.add('front');
            const back = document.createElement('div');
            back.classList.add('back');
            // card.setAttribute('id', 'category-card');
            const pictureCategorie = document.createElement('img');
            const pictureCategorieBack = document.createElement('img');
            const word = document.createElement('h1');
            const rotate = document.createElement('div');
            const audio = document.createElement('audio');
            const translation = document.createElement('h1');
            word.innerText = cards[arrNum + 1][i].word;
            // rotate arrows
            rotate.classList.add('rotate');
            translation.innerText = cards[arrNum + 1][i].translation;
            pictureCategorieBack.setAttribute('src', cards[arrNum + 1][i].image);
            pictureCategorie.setAttribute('src', cards[arrNum + 1][i].image);
            audio.setAttribute('src', cards[arrNum + 1][i].audioSrc);
            back.append(translation);
            back.append(pictureCategorieBack);
            
            front.append(word);
            front.append(pictureCategorie);
            front.append(rotate);
            
            cardInner.append(front);
            cardInner.append(back);
            card.append(cardInner);
            card.append(audio);
            document.querySelector("body > div > ul").append(card);
            

            document.querySelectorAll('.rotate').forEach(element => {
                element.addEventListener('click', function() {
                    event.stopImmediatePropagation();
                    const cardInner = event.target.parentElement.parentElement;
                    cardInner.classList.add('flipped');
                    document.querySelector('.flipped').addEventListener('mouseleave', function() {
                        cardInner.classList.remove('flipped');
                    })
            })
            });
            

            //add audio play onClick
            function play() {
                card.addEventListener('click', function() {
                    document.querySelectorAll("body > div > ul > li > audio")[i].play();
                })

            }


            if (document.querySelector("#checkbox").checked) {
                card.classList.add('play-mode');
            } else {
                play();            
            };
            
            

        }

        // SwitchMode
        document.querySelector('#checkbox').addEventListener('change', (event) => {
            if (document.querySelector("#checkbox").checked) {
                document.querySelectorAll('body > div > ul > li').forEach(element => {
                element.classList.remove('play');
                element.classList.add('play-mode');
                console.log('111');

                document.querySelectorAll("body > div > ul > li > audio").forEach(element => {
                    element.volume = 0.0;
                });


            
                

            });  
            } else {
                document.querySelectorAll('body > div > ul > li').forEach(element => {
                element.classList.remove('play-mode');
                document.querySelectorAll("body > div > ul > li > audio").forEach(element => {
                    element.volume = 1.0;
                });
            });  
    }
    

    
    
    
    
});
})
});

