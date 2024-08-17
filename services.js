//constructor
function Service(title,price){
    this.title=title;
    this.price=price;
}
//use jquery
function register(){
    let title = $("#txtTitle").val();
    let price = $("#txtPrice").val();
    
    let service = new Service(title,price);
    console.log(service);
    $("input").val(""); //inputs cleared
}

function init(){
    //hook events
    $("#btnRegister").on('click',register);
}

window.onload=init;