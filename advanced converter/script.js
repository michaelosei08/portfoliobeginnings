(function(){

    'use strict';

let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown' , function (event) {
        
        var key = event.code;

        if (key == 'KeyK'){
            convertType= 'Kilometers';
            heading.innerHTML = 'Kilometers to Miles converter';
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles';


        }
        else if(key == 'KeyM'){
            convertType= 'Miles';
            heading.innerHTML = 'Miles to Kilometers converter';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometeres';

        }

    });
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value); 
    
        if (distance ){
            if(convertType == 'miles'){
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
            }
            else {
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometeres to ${converted} miles`;
            }
        }
        
        else{
            answerDiv.innerHTML = "<h2> Please provide a number! </h2>"
        }
    });

})()