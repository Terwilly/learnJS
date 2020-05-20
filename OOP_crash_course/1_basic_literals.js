// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello2');
// console.log(typeof s2);

// console.log(window);
// alert(123);



/* Object in JavaScript*/

//Object Literal

const book1 = {
    title : 'Book One',
    author: 'Jhon Doe',
    year :'2013',

    getSummary: function(){
        return(`${this.title} was written by ${this.author} in ${this.year}`);
    }
}

const book2 = {
    title: 'Book two',
    author: 'Jane Doe',
    year: '2016',

    getSummary: function () {
        return (`${this.title} was written by ${this.author} in ${this.year}`);
    }
}

//console.log(book1.getSummary());

// for having the value
console.log(Object.values(book1));

//for having the keys ---------------> give an Array
console.log(Object.keys(book1));


// This is where Constructor Come when u repeat some code