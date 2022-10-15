function displayPetCards(){
//get the element to display the pets
let petDiv = document.getElementById("pets");
let tmp="";
//travel the pets array
for(let i=0;i<petSalon.pets.length;i++){
    //getting the pet
    let aPet = petSalon.pets[i];
// create the template (card)
    tmp+=`
        <div id="${aPet.id}" class="pet">
            <p>Name: ${aPet.name}</p>
            <p>Age: ${aPet.age}</p>
            <p>Gender: ${aPet.gender}</p>
            <p>Breed: ${aPet.breed}</p>
            <p>Service: ${aPet.service}</p>
            
            
            
        </div>`;

}

//insert the card into the HTML element
petDiv.innerHTML=tmp;
}
//!!!! Put back in line 35 if needed <td scope="row">${aPet.id}</td>
function displayPetTable(){
let petsTable= document.getElementById("tbody");
    let table="";
        for(let i=0; i<petSalon.pets.length; i++){
            let aPet = petSalon.pets[i];
            table+=`
            <tr id="${aPet.id}">
            
                <td> ${aPet.name}</td>
                <td> ${aPet.age}</td>
                <td> ${aPet.gender}</td>
                <td> ${aPet.breed}</td>
                <td> ${aPet.service}</td>
                <td> ${aPet.owner}</td>
                <td> ${aPet.phone}</td>
                <button class="btn btn-danger" onclick="deletePet(${aPet.id});">Delete</button>

            </tr>
            

                `;
        }
        petsTable.innerHTML =table;
}