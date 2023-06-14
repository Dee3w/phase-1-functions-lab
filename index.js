// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42;
    const distance = Math.abs(pickupLocation - headquartersLocation)
    return distance;
}
const distance = distanceFromHqInBlocks(50);
console.log(distance);

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
}
const pickupLocation = 50;
const blocks = distanceFromHqInBlocks(pickupLocation);
const feet = distanceFromHqInFeet(pickupLocation);

console.log(blocks);
console.log(feet);

function distanceTravelledInFeet(startBlock, destinationBlock) {
    const feetPerBlock = 264;
    const distanceInBlocks =Math.abs(destinationBlock - startBlock);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}
const startBlock = 34;
const destinationBlock = 38;
const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock)
console.log(distanceInFeet);

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
 

    if(distanceInFeet <= 400) {
        return 0;
    }else if(distanceInFeet <= 2000) {
        const fairPrice = (distanceInFeet - 400) * 0.02;
        return fairPrice;
    }else if (distanceInFeet <= 2500) {
        return 25;
    }else {
        return 'cannot travel that far';
    }
}
const start = 30;
const destination = 50;
console.log(calculatesFarePrice(start, destination) );
