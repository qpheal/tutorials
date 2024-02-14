//variable declaration
//commenting
//functions
//naming conventions
//Objects anad operators
//Its the easiest

//Variables Declaration
//Data can be a name, age anything
// In JS, use the var, let and const
const surname =  "carl"

const myage =78

const myFirstName ="Ralph"

//console.log(myFirstName + " " + surname)
console.log(`${surname} ${myFirstName}`)

// Naming conventions
//camel Case
const studentAge = 9

//pascal... Normally used for classes and Implementations
const StudentAge= 10

//snake case
// const student_age = 89


//Operators
const firstNumber = 8
const secondNumber = 9
 const sum = firstNumber + secondNumber
// console.log(sum)

const multiplication = firstNumber * secondNumber
// console.log(multiplication)

const division = firstNumber/ secondNumber
// console.log("Division", division)


//Data
const Age = 10// number
const isValid= true 
const marks = "40"

console.log( typeof marks)

// have methods and properties and values
const studentDetails = {
    name: "Ralph", 
    age: 89
}

console.log( "Student's name is ", studentDetails)


// functions
//function functionName.. is a block of code that performs a specific task
//function getTotalNumberOfStudents()


//robot building 
function greetUsers(){
    console.log("Good morning");
}

greetUsers()

function add(x, y){
    return x + y
}

const addition = greetUsers()

console.log(addition)

// callback functions
function doSomething(callback){
    console.log("Doing something....")

    //setTimeout used to give the time a system is supposed to run
    // promises and asynochronous... continues to operate while waiting    
    setTimeout(function (){

    })

}