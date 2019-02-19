document.getElementById("create").addEventListener("click", createNewPerson);
let name = document.getElementById("first");
let lastname = document.getElementById("last");
let age = document.getElementById("age");

function Person(name, lastname, age){
    
    this.firstName = name;
    this.lastName = lastname;
    this.age = age;
}

let newPerson = new Person(name, lastname, age)

function createNewPerson(){

    document.getElementById("demo").innerHTML = newPerson.firstName + " " + newPerson.lastName + " " + newPerson.age;
}

