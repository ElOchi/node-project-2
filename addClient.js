



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
addClient(dataAdd);
module.exports = addClient;
