
//MILESTONE 1

const btn_generates = document.getElementById("btn-generates")

btn_generates.addEventListener('click', function(){
    let nam_e = document.getElementById("full_name").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;
    km = km *0.21;
    if (age === "Minorenne"){
        km = km * 0.8;
    }
    else if (age === "Over"){
        km = km * 0.6;
    }
    console.log(nam_e);
    console.log(km);
    console.log(age);
});















    
