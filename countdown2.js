console.log('helloworld')

const btn = document.querySelector('#btn');
btn.addEventListener('click', runCountdown);


const container = document.querySelector('.container');





function runCountdown(){
    // generates num between 1 and 255 for grabbing RGB colors
    function getRandomNumber(){
        let randomNum = Math.floor(Math.random(1)*255);
        return randomNum;
    }

    // loops through countdown process
    let i = 10;
    while (i > 0){
        if (first = false){
            document.removeChild('.countdown')
        }
        let randomNumOutput1 = getRandomNumber();
        let randomNumOutput2 = getRandomNumber();
        const div = document.createElement('div');
        div.classList.toggle('countdown')
        div.style.cssText = 'background-color: rgb('+randomNumOutput1 +' '+ randomNumOutput2 +' 255);';
        div.textContent = i;
        container.appendChild(div);
        i--;
    }

}



