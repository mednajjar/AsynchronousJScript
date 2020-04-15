let myJason = new XMLHttpRequest();
let button1 = document.getElementById('button1');
let customer = document.getElementById('customer');


button1.addEventListener("click", loadCustomer);

function loadCustomer() {
    var ourData = JSON.parse(myJason.responseText);
    for (p in ourData) {
        customer.innerHTML += p + ": " + ourData[p] + "</br>";
    }
};
myJason.open('GET', 'customer.json');
myJason.send();
//-----------------------------------------------------------------------------
// var myJason2 = new XMLHttpRequest();
// var button2 = document.getElementById('button2');
// var customers = document.getElementById('customers');

// button2.addEventListener("click", loadCustomers);

// function loadCustomers() {
//     var Data = JSON.parse(myJason2.responseText);
//     for (p in Data) {
//         customers.innerHTML += p + ": " + Data[p] + "</br>";
//     }
// };
// myJason2.open('GET', 'customers.json', true);
// myJason2.send();