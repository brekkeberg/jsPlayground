// factory function
// does not use a prototype

function makeTestObject(name, attribute1, attribute2){
    const all = name + attribute1 + attribute2
    return {
        name: name,
        attribute1: attribute1,
        attribute2: attribute2,
        all: all
    }
}

let TEST1 = makeTestObject("brekke", "asdf", 11)
console.log(TEST1)



// class Declaration
class Book1{
    constructor(title, author, pages, readStatus) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.readStatus = readStatus
    }
}

Book1.prototype.sayHello = function(){
    console.log("hello world!");
}

Book1.prototype.returnHello = function(){
    return "hello wordld return!";
}

Book1.prototype.sayTitle = function() {
    console.log(`The title of this book is ${this.title}!`)
    console.log("This is the Title: " + this.title)
    console.log(this.title + " is a book by " + this.author + ". It is " + this.pages + " pages long.")
}

let bookA = new Book1("a", "a", "a", "a");

bookA.sayTitle();



// object constructor function
// should use class declaration instead of this
function Book (title, author, pages, readStatus)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype = {
    returnTitle : function(){ return this.title;},
    throw: function(){ return "throw the apple";}
};


let book1 = new Book("The Lord of the Rings", "JRR Tolkein", 1112, true);
let book2 = new Book("Mama Mama", "Jean Marzollo", 12, true);

console.log(book1.returnTitle())
console.log(book1.throw())

//adding objects to arrays
let arr = []

arr.push(book1);
arr.push(book2);

console.table(arr)



// example from youtube
// https://www.youtube.com/watch?v=fvmMxMGUEnQ
function Apple (color, weight)
{
    this.color = color;
    this.weight = weight;
}

Apple.prototype = {
    eat : function(){ return this.color;},
    throw: function(){ return "throw the apple";}
};

let apple1 = new Apple ('red', 99);
let apple2 = new Apple ('bleu', 1000);
let apple3 = new Apple ("purple", 123123);

console.log(apple3.eat())



