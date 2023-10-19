const buttonOne = document.querySelector('.testButtonOne');
const buttonTwo = document.querySelector('.testButtonTwoClass');
const buttonCounter = document.querySelector('.testButtonCounter');

buttonOne.addEventListener('click', function (x) {
    x.target.style.background = 'blue';
    console.log(x);
    console.log(x["target"])
});


buttonTwo.addEventListener('click', testFunc);

function testFunc(){
    console.log(this.id);
    console.log(this.className);
    console.log(this.innerText);
    console.log(this.innerHTML);
    this.style.background = 'blue';
}
const STARTINGBUTTONCOUNT = 0;
let currentButtonCount = STARTINGBUTTONCOUNT;

buttonCounter.addEventListener('click', addOneCount);

function addOneCount(){
    currentButtonCount++;
    this.innerText = currentButtonCount;
}

