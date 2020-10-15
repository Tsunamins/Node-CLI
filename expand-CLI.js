const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Endpoint> '
});


console.log("Which endpoint would you like to sync?")
console.log("1. Accounts/Teams")
console.log("2. Contacts/Members")
console.log("3. Memberships")
console.log("4. Resources/Add-Ons")
console.log("5. Quit/Exit")

rl.prompt();

//prop put this in a function and add to other functions

rl.on('line', (line) => {
        switch(line){
            case '1':
                console.log('triggered case 1')
                return Accounts()
            case '2':
                return Contacts()
            case '3':
                return Memberships()
            case '4':
                return Resources()
            case '5':
                rl.close();
                break;
            default:
                rl.close();
        }
        rl.prompt();
    

}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });




function Accounts(){
    console.log("I'm the accounts function")
}

function Contacts(){
    console.log("I'm the contacts function")
}

function Memberships(){
    console.log("I'm the Memberships function")
}

function Resources(){
    console.log("I'm the Resources or Add-Ons function")
}