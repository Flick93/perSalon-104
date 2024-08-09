let pets=[]//pets array

//The Constructor
function pet(name,age,gender,breed){
    this.name=name
    this.age=age
    this.gender=gender
    this.breed=breed
}

function isValid(pet){
    let validation =true;
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");
    
    inputName.classList.remove("error")
    inputAge.classList.remove("error")

    if(pet.name==""){
        validation=false;
        inputName.classList.remove("error")
    }

    if(pet.age==""){
        validation=false;
        inputAge.classList.remove("error")
    }



    return validation
}
function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    
    let newPet = new pet(inputName,inputAge,inputGender,inputBreed)
    if(isValid(newPet)==true){
       pets.push(newPet)
    displayRow();  
    }
     
}

function deletePet(id){
    console.log("deleting + id")
    pets.splice(id,1);
    document.getElementById(id).remove
}

function init(){
    let pet1 = new pet("Scooby",10,"Male","Husky")
    let pet2 = new pet("Scrappy",9,"Male","Mixed")
    pets.push(pet1,pet2)
    displayRow();
}

window.onload=init; //wait to render the HTML