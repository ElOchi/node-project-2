var csv = require('csv');
var fs = require('fs');
var prompt = require('prompt-sync')();

function processCsv(filename, callback) {
    fs.readFile(filename, function(err, data) {
        if (err) throw err;

        csv.parse(data, function(err, dataParsed) {
            // triggers when there's an issue parsing the data
            if (err) throw err;

            callback(dataParsed);
        });
    });
}

function writeCsv(filename, data) {
    csv.stringify(data, {
        header: true
    }, function(err, data) {
        if (err) throw err;

        fs.writeFile(filename, data, function(error) {
            if (error) throw err;
            console.log('CSV update was successful');
        });
    });
};

function addClient(data) {
    // var client = [];
    var newClient = [];
    console.log("Adding new Client");
    data.push(newClient);
    // llamar a un callback que escribe
    writeCsv('example-out.csv', data);
};

function updateClient(currentData) {
    console.log("Updating Client: ");
    var currentClient = prompt("Email: ");
    var found = false;
    var update = [];

    for (var i = 1; i < currentData.length; i++) {
        // currentData[i][3];
        if (currentData[i][3] === currentClient) {
            found = true;

            console.log("Enter new data");
            var name = prompt();
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
        console.log("data not found " + currentClient);
        return currentData;

    }
}

function showCount(data) {
  console.log(data.length - 1);
    return data.length - 1;
}



function searchContact(currentData) {
    var searchContact = prompt("Email: ");
    var found = false;
    for (i = 1; i < currentData.length; i++) {
        if (currentData[i][3] === currentClient) {
            found = true;
            logResult("Client Found");
            return currentData.splice(i, 1);
        }
    }
    if(!found){
      console.log("No data" + currentClient);
      return currentData;
    }
}
// Main program
var argument = process.argv[2];

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
        callback = searchContact;
    default:
        throw 'No command found';
        break;
}

processCsv('./example.csv', callback);
