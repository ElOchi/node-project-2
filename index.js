var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();


fs.readFile('./example.csv', (err, data) => {
    if (err) throw err;

    csv.parse(data, (err, dataParsed) => {

        console.log(dataParsed);
        updateClient(dataParsed);
    })
});

function addClient() {
    var client = [];
    console.log("Adding new Client");
    client.push(prompt("First Name: "));
    client.push(prompt("Last Name: "));
    client.push(prompt("Phone: "));
    client.push(prompt("Email: "));
    client.push(prompt("City: "));
    client.push(prompt("Zip: "));
    client.push(prompt("Website: "));
    client.push(prompt("Company: "));
    return client;
};

function updateClient(currentData) {
    console.log("updating client ");
    var currentClient = prompt("Email: ");
    var found = false;
    for (var i = 1; i < currentData.length; i++) {
        // currentData[i][3];
        if (currentData[i][3] === currentClient) {
            found = true;
            console.log("Enter new data");
          var name = prompt()
        }
    }
    // if(found === true){
    //   console.log("found");
    // }else {
    //   console.log("not found", + currentClient) ;
    // }
    if (!found) {
        console.log("data not found  " + currentClient);
    }
};

function deleteClient(currentData) {

}
