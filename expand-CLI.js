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
        //put the entry point for officeRND here, preferably as a function, pass in variables where needed
        rl.close();

});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});