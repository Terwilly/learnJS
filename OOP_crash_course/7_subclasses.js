// ES6 _ Classes 

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return (`${this.title} was written by ${this.author} in ${this.year}`);
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return (`${this.title} is ${years} year's old`);
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static topBookStores() {
        return ' Barnes & Noble';
    }
}

//Magazine Subclass

class Magazine extends Book {
    constructor(title,author,year,month){
        super(title, author, year); // to link it to the parent
        this.month = month;
    }
}


// Instantiate Magazine

const mag1 = new Magazine('Mag One', 'Jane Doe', '2019', 'Jan');

console.log(mag1);
console.log(mag1.getSummary()); // It's much easier instead of using inheritance;
