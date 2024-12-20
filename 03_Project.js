const prompt = require("prompt-sync")()
const contacts = []

function printInfo(){
    console.log("Contact Management System")
    console.log("-------------------------")
    console.log("1. Add Contact")
    console.log("2. Delete Contact")
    console.log("3. View Contact")
    console.log("4. Search Contact")
    console.log("5. Exit")
}

function addContact(){
    let name = prompt("Enter name: ")
    let phone = prompt("Enter phone number: ")
    let email = prompt("Enter email: ")
    let address = prompt("Enter address: ")
    contacts[name] = {phone, email, address}
    console.log("Contact added successfully!")
}

function deleteContact(){
    let name = prompt("Enter name of contact to delete: ")
    if(name in contacts){
        delete contacts[name]
        } else {
            console.log("Contact not found!")
            }
}

function viewContact(){
    console.log("List of contacts")
    for(let name in contacts){
        console.log(`${name} - ${contacts[name].phone} - ${contacts[name].email} - ${contacts[name].address}`)}
            }
function searchContact(){
    let name = prompt("Enter name of contact to search: ")
    if(name in contacts){
        console.log("Contact found")
        console.log(`${name} - ${contacts[name].phone} - ${contacts[name].email} - ${contacts[name].address}`)
            } else {
                console.log("Contact not found!")
                }
}

let valid = true

printInfo()

while(valid ){
    const choice = prompt("Enter your choice: ")
    switch(choice){
        case "1":
            addContact();
            break;
        case "2":
            deleteContact();
            break;
        case "3":
            viewContact();
            break;
        case "4":
            searchContact();
            break;
        case "5":
            console.log("Exiting the program");
            valid = false;
            break;
        default:
            console.log("Invalid choice. Please choose a valid option.");
        }
}