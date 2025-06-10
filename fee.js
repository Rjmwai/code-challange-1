function estimateTransactionFee(amountToSend) {
    const minFee = 10;
    const maxFee = 70;
    let calculatedFee = amountToSend * 0.015;

    // Applying min and max limits
    if (calculatedFee < minFee) {
        calculatedFee = minFee;
    } else if (calculatedFee > maxFee) {
        calculatedFee = maxFee;
    } else {
        calculatedFee = Math.round(calculatedFee); // Optional: Round to nearest integer
    }

    const totalDebited = amountToSend + calculatedFee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}\n`);
    console.log("Send Money Securely!");
}

// Prompt the user for amount
const userInput = prompt("Unatuma Ngapi? (KES):");
const amount = Number(userInput);

// Validating the input
if (!isNaN(amount) && amount > 0) {
    estimateTransactionFee(amount);
} else {
    console.log("Tafadhali andika kiasi sahihi cha kutuma.");
}