// const MyStack = import('./stack.js');
import MyStack from './stack.js';
import readline from 'readline';


const StackOne = new MyStack();
// StackOne.create("Review 1");
const myInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu(){
    console.log('\n' + "Welcome to Recipe Book Reviews!" + '\n');
    console.log("1. View all reviews");
    console.log("2. Add a new review");
    console.log("3. Update an existing review");
    console.log("4. Delete a review");
    console.log("5. Exit" + '\n');
    askForOption("Please choose an option: ", option);
}

function askForOption(prompt, callback){
    myInput.question(prompt + " ", callback);
}

function option(selected){
    switch (selected) {
        case '1':
            StackOne.read();
            menu();
            break;
        case '2':
            askForOption("Add a new review:", (newReview) => {
                StackOne.create(newReview);  
            menu();  
            });
            break;
        case '3':
            myInput.askForOption("Enter review to update  (id):", (id) => {
                myInput.askForOption("Update Review:", (updateReview) => {
                    StackOne.update(id, updateReview); 
                menu();  
                });
            });
            break;
        case '4':
            askForOption("Enter review to delete (idw:", (id) => {
                StackOne.delete(id);  
            menu();  
            });
            break;
        case '5':
            console.log("Thank you for interacting with us! Have a good day!" + '\n');
            break;
        default:
        console.log("Please enter a number from the menu." + '\n');
        menu();
    }
}

menu();