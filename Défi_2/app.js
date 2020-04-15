let myJason = new XMLHttpRequest();
let button1 = document.getElementById('button1');


button1.addEventListener("click", function () {
    myJason.onload = function () {
        var ourData = JSON.parse(myJason.responseText);
        document.getElementById('customer').textContent = myJason.responseText;
    };
    myJason.open('GET', 'customer.json');
    myJason.send();
});