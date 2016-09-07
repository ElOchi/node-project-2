var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();


fs.readFile('./example.csv', (err, data) => {
    if (err) throw err;

    csv.parse(data, (err, dataParsed) => {
        // testing
        // console.log(dataParsed);
        // updateClient(dataParsed);
        deleteClient(dataParsed);
        // showCount(dataParsed);
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
    console.log("Updating Client: ");
    var currentClient = prompt("Email: ");
    var found = false;
    var update = []

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

// console.log(prompt('test', 'default'));

function deleteClient(currentData) {
    console.log("Delete Client ");
    var currentClient = prompt("Email: ");
    var found = false;
    for (var i = 1; i < currentData.length; i++) {
        if (currentData[i][3] === currentClient) {
            found = true;
            console.log("Client Delete");
            return currentData.splice(i, 1);

        }
    }
    if (!found) {
        console.log("data not found " + currentClient)
        return currentData;

    }
}

function showCount(data) {
    console.log(data.length - 1);
    return data.length - 1;
}
