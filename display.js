function displayRow(){
    let table=document.getElementById("pets");
    let row="";//clear the HTML div
    //travel the array(for)
    for(i=0;i<pets.length;i++){
        let pet=pets[i]
    
    //create the template
    row+=`
    <tr id="${i}">
        <td>${i+1}</td>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td><button onclick="deletePet(${i});">Delete</button></td>
    </tr>
    `;
    //display the row on the html
    
    table.innerHTML=row;
    }
}

function displayInfo(){
    document.innerHTML("totalPet").innerHTML=pets.length;
}

