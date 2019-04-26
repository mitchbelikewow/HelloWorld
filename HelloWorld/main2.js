//constructor
function Person(first, last,dob){
    this.fisrt=first;
    this.last=last;
    this.dob=new Date(dob);

}

Person.prototype.getFullname=function(){
    return`${this.first} ${this.last}`;
}
//instantiate
const person1=new Person("john", "doe","4-1-2001");
console.log(person1);
console.log(person1.getFullname);


//class adds methods to prototype. more pretty, easy to read, like java
class Persons{
    constructor(first, last,dob){
    this.fisrt=first;
    this.last=last;
    this.dob=new Date(dob);
    }
    getFullname(){
        return`${this.first} ${this.last}`;
    }
}
