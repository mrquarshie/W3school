//object constructors
function Person(first, last, age, eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}

//new example
const myFather = new Person("akwasi", "amakye", 50, "tadi");
const myMother = new Person("ama", "adwubi", 45, "accra")
//adding a new property to an object
myMother.shirtcolor="red";
//javascript events
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>