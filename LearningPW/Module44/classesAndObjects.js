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

const p = new Product();
console.log(p);
p.display();