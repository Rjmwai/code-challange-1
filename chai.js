function calculateChaiIngredients(numberOfCups) {

    // calculating the required amount for each cup
    const water = 200 * numberOfCups
    const milk = 50 * numberOfCups 
    const teaLeaves = 1 * numberOfCups
    const sugar = 2 * numberOfCups  

    // display the results
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon${teaLeaves === 3 ? '' : 's'}`);
    console.log(`Sugar (Sukari): ${sugar} teaspoon${sugar === 6 ? '' : 's'}`);
    console.log('Enjoy your Chai Bora!');
}
// prompt user for input
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(3);

//validating the input and call function
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log(numberOfCups);
}