function calculateBodaFare(distanceInKm) {
    const baseFare = 50
    const chargePerKm = 15 

    const distanceFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceFare;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");
}

// Prompt user to input distance
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = Number(userInput);

// Validating the  input
if (!isNaN(distance) && distance > 0) {
    calculateBodaFare(distance);
} else {
    console.log("Tafadhali andika nambari sahihi ya kilomita.");
}