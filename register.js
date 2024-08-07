let pets=[]//pets array

function pet(name,age,gender,breed){
    this.name=name
    this.age=age
    this.gender=gender
    this.breed=breed
}
function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    
    let newPet = new pet(inputName,inputAge,inputGender,inputBreed)
    
    pets.push(newPets)
    console.log(pets);    
}
function init(){
    let pet1 = new pet("Scooby",10,"Male","Husky")
    let pet2 = new pet("Scrappy",9,"Male","Mixed")
    pets.push(pet1,pet2)
}

window.onload=init; //wait to render the HTML