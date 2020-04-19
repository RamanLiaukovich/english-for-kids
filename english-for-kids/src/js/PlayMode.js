import cards from "./Cards";

export class PlayMode {
    
}



document.querySelector('#checkbox').addEventListener('change', (event) => {
    if (document.querySelector("#checkbox").checked) {
        //Start game button
        const button = document.createElement('button');
        button.innerText = 'Start game'
        document.querySelector('.main-container').append(button);

        document.querySelector("body > div > button").addEventListener('click', function() {
            this.classList.add('repeat-button');
            this.innerText = 'Repeat';

            const audioArr = Array.from(document.querySelectorAll("body > div > ul > li > audio"));
            const chosenAudio = [];
            console.log(audioArr);
    
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }

            const randomAudio = audioArr[getRandomInt(audioArr.length - 1)];
            randomAudio.volume = 1.0;
            
            setTimeout(function() {
                randomAudio.play();
            }, 800); //play delay


            chosenAudio.concat(audioArr.splice(audioArr.indexOf(randomAudio), 1));
            console.log(audioArr.splice(audioArr.indexOf(randomAudio), 1));
        })

    } else {
        document.querySelector('body > div').removeChild(document.querySelector('body > div > button'));
    }

}) 

// document.querySelector("body > div > button").addEventListener('click', function() {
//     randomAudio.play();
// });