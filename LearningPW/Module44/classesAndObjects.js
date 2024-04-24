// BASICS STRUCTURE of OBJECT CLASSES

class Product{
    //properties -> variables -> data member
    name;
    price;
    rating;
    // behaviours -> functions -> number functions
    display(){
        console.log("display the current product")
    }
}

const p = new Product(); //new -> creates an empty plain object
// in above peace of code we are calling the constructor method
console.log(p);
p.display();