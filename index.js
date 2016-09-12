var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();
var help = require('./help');
var color = require('color');

function processCsv(fileName, callBack) {
    fs.readFile(fileName, function(err, data) {
        if (err) throw err;

        csv.parse(data, {
            columns: true
        }, function(err, dataParsed) {
            callBack(dataParsed, fileName);
            // // testing
            // console.log(dataParsed);
            // updateClient(dataParsed);
            // deleteClient(dataParsed);
            // showCount(dataParsed);
        });
    });
};


function writeCsv(data, fileName) {
  csv.stringify(data, { header: true }, function(error, data) {
    fs.writeFile(fileName, data, function() {
      console.log('I finished processing');

    });
  });
};


function addClient(dataAdd, fileName) {
    console.log("Adding new Client");

    var first_name = prompt("First Name: ");
    var last_name = prompt("Last Name: ");
    var phone = prompt("Phone: ");

    var email = prompt("Email: ");
    var city = prompt("City: ");
    var zip = prompt("Zip: ");
    var website = prompt("Website: ");
    var company = prompt("Company: ");
    var client = {
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
        city: city,
        zip: zip,
        website: website,
        company: company
    };
    dataAdd.push(client);
    writeCsv(dataAdd, fileName);

};

function updateClient(currentData) {
    console.log("Updating Client: ");
    var currentClient = prompt("Email: ");
    var found = false;
    var update = []

    if (validateContactByEmail(currentClient, currentData)) {
        console.log("Enter new data");
        var name = prompt()
    } else {
        console.log("data not found  " + currentClient);
    };
    // for (var i = 1; i < currentData.length; i++) {
    //     // currentData[i][3];
    //     if (currentData[i][3] === currentClient) {
    //         found = true;
    //
    //         console.log("Enter new data");
    //         var name = prompt()
    //     }
    // }
    // // if(found === true){
    // //   console.log("found");
    // // }else {
    // //   console.log("not found", + currentClient) ;
    // // }
    // if (!found) {
    //     console.log("data not found  " + currentClient);
    //}
};

// console.log(prompt('test', 'default'));

function deleteClient(currentData, fileName) {
    console.log("Delete Client ");
    var currentClient = prompt("Email: ");
    var found = false;
    var newData = [];
    for (var i = 1; i < currentData.length; i++) {
        if (currentData[i][3] === currentClient) {
            found = true;
            console.log("Client Delete");
            newData = currentData.splice(i, 1);

        }
    }

    if (!found) {
        console.log("data not found " + currentClient)
        return currentData;
    }

    writeCsv(newData, fileName);
}


function showCount(data) {
    console.log(data.length - 1);
    return data.length - 1;
}

function validateContactByEmail(email, currentData) {
    for (var i = 1; i < currentData.length; i++) {
        // currentData[i][3];
        if (currentData[i][3] === email) {
            return false;
        };
    };

    return true;
}

// Main program
// node index.js count
var argument = process.argv[2];
// argument -> sum, update, count...

// Main program
switch (argument) {

    case 'count':
        callback = showCount;
        break;

    case 'add':
        callback = addClient;
        break;

    case 'del':
        callback = deleteClient;
        break;

    case 'search':
        callback = searchClient;
        break;

    default:
        throw 'No command found';
        break;
};

processCsv('example.csv', callback);
