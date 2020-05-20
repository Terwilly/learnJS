// Object of Protos

//Building a prototype

const bookProtos = {
    getSummary : function(){
        return (`${this.title} was written by ${this.author} in ${this.year}`);
    },
    getAge : function() {
        const years = new Date().getFullYear() - this.year;
        return (`${this.title} is ${years} year's old`);
    }
}

//Create the Object

// const book1 = Object.create(bookProtos);

// book1.title = "Book One";
// book1.author = "john Doe";
// book1.year = "2013";

const book1 = Object.create(bookProtos, {
    title : {value : "Book One" },
    author: { value: "John Doe" },
    year: { value: "2013" }
});

console.log(book1);