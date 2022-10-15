//object literal {}
let petSalon = {
    //arrributes
    name: "The Fashion Pet",
    phone: "000-000-0000",
    address: {
        country: "US",
        city: "Carlsbad",
        street: "Tamarack",
        number: "111",
        zip: "92008"

    },
     
    pets:[]
}
let count=0;
//  console.log(petSalon)

 
// this are the arguments (local vars)
 function Pet(name, age, gender, breed, services, ownerName, contactPhone){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = services;
    this.owner = ownerName;
    this.contactPhone =contactPhone;
    this.id=count++;
 }

//  let rigby = new Pet("Rigby", 3, "Siamese", "male", "Fleas treatment", "David", "888-777-6543");
//  console.log(rigby);
//  petSalon.pets.push(rigby);

//  let loki = new Pet("Loki", 3, "Siamese", "male", "Teeth cleaning", "David", "888-777-6543");
//  console.log( loki);
//  petSalon.pets.push(loki);

//  let nalaSky = new Pet ("Nala", 4, "Ragdoll", "female", "Deep shampoo treatment" , "Sissa","333-333-3333");
//  console.log(nalaSky);
//  petSalon.pets.push(nalaSky);

//getting the value from the inputs


function isValid(newPet){
    let valid=true;
    if(newPet.service==""){
        valid=false;

    }
    return valid;
}

//register function
function register(){
    let inputName= document.getElementById("txtName").value;
    let inputAge= document.getElementById("txtAge").value;
    let inputGender= document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let selectService = document.getElementById("selService").value;
    let inputOwner= document.getElementById("txtOwner").value;
    let inputPhone = document.getElementById("txtPhone").value;
    //console.log(inputName.value, inputAge.value, inputGender.value, inputBreed.value, selectService.value, inputOwner.value, inputPhone.value);
    let thePet = new Pet(inputName, inputAge, inputGender, inputBreed, selectService, inputOwner, inputPhone);
    console.log(thePet);
    petSalon.pets.push(thePet);
    //display the array
    clearInputs();
    displayNumberOfPets();
    displayPetCards();
    displayPetTable();
    console.log(petSalon.pets)
 }

 function clearInputs(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtOwner").value="";
    document.getElementById("selService").value="";
    document.getElementById("txtPhone").value="";
 }
 function displayNumberOfPets(){
    document.getElementById("numberOfPets").innerHTML=`We have ${petSalon.pets.length} pets in the system`;
 }
 function deletePet(petId){
    let deleteIndex;
    for(let i=0;i<petSalon.pets.length;i++){
        let aPet = petSalon.pets[i];
        if(aPet.id==petId){
            deleteIndex=i;
            console.log("The deleted pet is in the position" + deleteIndex);
        }
    
    }
    petSalon.pets.splice(deleteIndex,1);
    displayNumberOfPets();
    displayPetCards();
    displayPetTable();
 }
 function init(){
    //create a new pet
    let rigby = new Pet("Rigby", 3, "Male", "Siamese","Flea treatment", "David", "888-777-6543");
    let loki = new Pet("Loki", 3, "Male", "Siamese", "Teeth cleaning", "David", "888-777-6543");
    let nalaSky = new Pet ("Nala", 4, "Female", "Ragdoll","Deep shampoo treatment" , "Sissa","333-333-3333");
    //push the pet into the array
    petSalon.pets.push(rigby,loki,nalaSky);
    displayNumberOfPets();
    displayPetCards();
    displayPetTable();
 }
 window.onload = init;

//  function displayInfo(){
//     document.getElementById("footer-info").innerHTML = `<p>Welcome to the fashion pet! Our address is ${petSalon.address.street} ${petSalon.address.number}, Zip code: ${petSalon.address.zip}</p>
//     <p>${petSalon.address.city}, ${petSalon.address.state}</p>`;

//  }
//  function displayPetNames(){
//     for(let i=0;i<petSalon.pets.length;i++){
//         console.log(petSalon.pets[i].name);
//     }
//  }

// for(let i=0; i<students.length; i++){
//     console.log(students[i].age);
// }
// console.log("We have " + students.length + " students");


// console.log(petSalon.name);
// console.log(petSalon.phone);

// let students = [
//     {
//         name:"Myles",
//         age:98,
//         grade:"A"
//     },
//      {
//         name:"Tuong",
//         age:99,
//         grade:"A-"
//      },
//       {
//         name:"Miguel",
//         age:97,
//         grade:"F"
//       }
//     ]; // this is an array of students

// //FOR LOOP: start point; stopping condition ; increment
// //length return the number of elements
// for(let i=0; i<students.length; i++){
//     console.log(students[i].age);
// }
// console.log("We have " + students.length + " students");

// //brute force solution
// // console.log(students[0]);
// // console.log(students[1]);
// // console.log(students[2]);
// // console.log(students[3]);