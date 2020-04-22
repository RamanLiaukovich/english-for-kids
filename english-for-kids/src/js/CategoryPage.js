import cards from "./Cards";

export class CategoryPage {
    
}




function playMode() {
    document.querySelector("body > div > button").removeAttribute('style');
    document.querySelectorAll('body > div > ul > li').forEach(element => {
        
        element.classList.remove('play');
        element.classList.add('play-mode');
        document.querySelectorAll('body > div > ul > li > audio').forEach(element => {
            element.volume = 0.0;
        });
    });

    const star = document.createElement('div');
    star.classList.add('star-win');
    const audioArr = Array.from(document.querySelectorAll('body > div > ul > li > audio'));
    //generate random index
    function shuffle(audioArr) {
        audioArr.sort(() => Math.random() - 0.5);
    }
    shuffle(audioArr);
    console.log(audioArr);
    
    function audioCreation() {

        document.querySelector('body > div > button').removeEventListener('click', button);
        while (audioArr.length !== 0) {
            audioArr[0].volume = 1.0;
            audioArr[0].play();
            function repeat() {
                audioArr[0].play();
            }
            
            document.querySelector('body > div > button').addEventListener('click', repeat);
            console.log(audioArr[0]);
    
            let correctElement = audioArr[0].parentElement;
            

            if (correctElement.addEventListener) {
                correctElement.addEventListener("click", function() {
                    this.querySelector('li > audio').volume = 0.0;
                    const correctAudio = new Audio('src/assets/audio/correct.mp3');
                    correctAudio.play();
                    event.currentTarget.classList.add('disable');
                    document.querySelector('.categorie-score').append(star);
                    correctElement.classList.add('correct');
                }, false);
            };
            set
            if (audioArr[0].parentElement.getAttribute('class') === 'category-card play-mode correct') {
                console.log(audioArr);
            };
            
            
            
            audioArr.splice(0, 1);
        }
    }
    

    function button() {
        this.classList.add('repeat-button');
        this.innerText = 'Repeat';
        document.querySelector("body > header > label").classList.add('input-disable');
        document.querySelector("#checkbox").disabled = true;
            
        audioCreation();
    };

    document.querySelector('body > div > button').addEventListener('click', button);

                
    
};



function elementsCreation() {
    function checked() {
        return document.querySelector("#checkbox").checked;
    }
    
    let arrNum = cards[0].indexOf(categoryName);
    document.querySelector('body > div').removeChild(document.querySelector('body > div > ul'));
    console.log(event.target);
    //create New Page (category page)
    const categorieHeader = document.createElement('div');
    const categorieName = document.createElement('div');
    const scoreContainer = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = 'Start game'
    categorieHeader.classList.add('categorie-header');
    categorieName.classList.add('categorie-name');
    categorieName.innerText = categoryName;
    scoreContainer.classList.add('categorie-score');
    categorieHeader.append(categorieName);
    categorieHeader.append(scoreContainer);

    const cardContainer = document.createElement('ul');
    cardContainer.classList.add('cards-container');
    document.querySelector("body > div").append(categorieHeader);
    document.querySelector("body > div").append(cardContainer);
    document.querySelector("body > div").append(button);
    document.querySelector("body > div > button").setAttribute('style', 'display: none;');     
    
     

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
                cardInner.parentElement.querySelector('li > audio').volume = 0.0;
                cardInner.classList.add('flipped');
                document.querySelector('.flipped').addEventListener('mouseleave', function() {
                    cardInner.classList.remove('flipped');
                    cardInner.parentElement.querySelector('li > audio').volume = 1.0;
                })
            })
        });
        document.querySelectorAll('body > div > ul > li').forEach(element => {
            element.addEventListener('click', function() {
                event.currentTarget.querySelector('li > audio').play();
            });
        });
    }

    if(checked() === true) {
        playMode();
    }

    document.querySelector('#checkbox').addEventListener('change', (event) => {
        if (document.querySelector("#checkbox").checked) {
            playMode();
    
        } else {
            document.querySelector('body > div > button').setAttribute('style', 'display: none;');
            document.querySelectorAll('body > div > ul > li').forEach(element => {
                element.classList.remove('play-mode');
                element.classList.remove('disable');
                document.querySelector("body > div > div > div.categorie-score").setAttribute('style', 'opacity: 0;')
                document.querySelectorAll("body > div > ul > li > audio").forEach(element => {
                    element.volume = 1.0;
                });
            });
        };
    });
};
let categoryName;

//Clear Main container
document.querySelectorAll("body > div > ul > li").forEach(element => {
    element.addEventListener('click', function() {
        categoryName = event.currentTarget.children[1].innerText;
        elementsCreation();
    });
    
    
});

 
document.querySelectorAll("body > header > nav > ul > a").forEach(element => {
    element.addEventListener('click', function() {
        event.preventDefault(); 
        categoryName = event.currentTarget.innerText;
        if (categoryName === 'Main Page') {
            document.location.reload(true);
        }
        if (document.body.contains(document.querySelector('.categorie-header')) === true) {
            document.querySelector('body > div').removeChild(document.querySelector('body > div > div'));
        };
        if (document.querySelectorAll('button').length !== 0) {
            document.querySelector('body > div').removeChild(document.querySelector('body > div > button'));
        };
        elementsCreation();
        document.querySelector('.nav-bar').classList.remove('active');
        document.querySelector('.menu').classList.remove('active');
    });
});
