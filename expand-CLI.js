const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Which endpoint would you like to sync?")
console.log("1. Accounts/Teams")
console.log("2. Contacts/Members")
console.log("3. Memberships")
console.log("4. Resources/Add-Ons")
console.log("5. Quit/Exit")

rl.question("Choose an endpoint: ", function(choice) {
        console.log(`${choice}, will trigger a function in theory now`);
        switch(choice){
            case 1:
                Accounts()
                break;
            case 2:
                Contacts()
                break;
            case 3:
                Memberships()
                break;
            case 4:
                Resources()
                break;
            case 5:
                rl.close();
                break;
            default:
                rl.close();
        }
        rl.close();

});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
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