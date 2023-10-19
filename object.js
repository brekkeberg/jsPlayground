const book1 = {
    title: "LOTR",
    author: "JRR Tolkein",
    pages: 15123,
    completedReading: false,
    info: function(){
        return( this.title + " by " + 
                this.author + " is " + 
                this.pages + " pages. " + "Read status is: " + 
                this.completedReading)
    }
}

console.log(book1.info())



