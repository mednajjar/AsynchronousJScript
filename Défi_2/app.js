let myJason = new XMLHttpRequest();
let button1 = document.getElementById('button1');
let customer = document.getElementById('customer');


button1.addEventListener("click", loadCustomer);

function loadCustomer() {
    var ourData = JSON.parse(myJason.responseText);
    var result = '';
    for (var i in ourData) {
        result += '<ul>' + '<li>' + i + ": " + ourData[i] + '</li>' + '</ul>';

        document.getElementById('customer').innerHTML = result;
    }

};
myJason.open('GET', 'customer.json');
myJason.send();
//-----------------------------------------------------------------------------
var myJason2 = new XMLHttpRequest();
var button2 = document.getElementById('button2');
var customers = document.getElementById('customers');

button2.addEventListener("click", loadCustomers);

function loadCustomers() {
    var Data = JSON.parse(myJason2.responseText);

    var output = '';
    for (var i in Data) {
        output += '<ul>' +
            '<li>ID : ' + Data[i].id + '</li>' +
            '<li>Name : ' + Data[i].name + '</li>' +
            '<li>Company : ' + Data[i].company + '</li>' +
            '<li>Phone : ' + Data[i].phone + '</li>' +
            '</ul>';

    }
    document.getElementById('customers').innerHTML = output;

};
myJason2.open('GET', 'customers.json', true);
myJason2.send();