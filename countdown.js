console.log('helloworld')

const container = document.querySelector('.container');


function getRandomColor(){
    let generatedRgbValues = [];
    let loopingNumber = 3;
    while (loopingNumber > 0){
        let randomNum = Math.floor(Math.random(1)*255)
        loopingNumber--;
        generatedRgbValues.push(randomNum);
    }
    return generatedRgbValues
}

console.log(getRandomColor())

let i = 10;

while (i > 0){
    let color = getRandomColor()
    const div = document.createElement('div');
    div.style.cssText = 'width: 50px; text-align:center; color: white; background-color: rgb('+color[0]+' '+color[1]+' 255);';
    div.textContent = i;
    container.appendChild(div);
    i--;
}

