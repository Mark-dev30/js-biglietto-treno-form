
//MILESTONE 1

const btn_generates = document.getElementById("btn-generates")

btn_generates.addEventListener('click', function(){
    let nam_e = document.getElementById("full_name").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;
    let offer;
    km = (km * 0.21).toFixed(2);

    if (age === "Minorenne"){
        km = (km * 0.8).toFixed(2);
        offer = "Biglietto Studenti";
    }
    else if (age === "Over"){
        km = (km * 0.6).toFixed(2);
        offer = "Biglietto Over 65";
    }
    else{
        offer = "Biglietto Standard";
    }

    /* MILESTONE 2 */

    document.getElementById("price").innerHTML = km + " €";
    document.getElementById("name_passenger").innerHTML = nam_e;
    document.getElementById("offer").innerHTML = offer;

    let num_invoice = parseInt(Math.random() *10000000)
    document.getElementById("invoice").innerHTML = num_invoice;
    let tickets = parseInt(Math.random() *10000000000)
    document.getElementById("cod_ticket").innerHTML = tickets;

    console.log(nam_e);
    console.log(km);
    console.log(age);
});

















    
