let i = 10;
let first = true;
while (i >= 0){
    if (first == true){
        console.log("Begin countdown sequence")
    }
    console.log(i);
    i--;
    if (i < 0){
        console.log("Blast off!")
    }
    first = false;
}