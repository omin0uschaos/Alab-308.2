const radius = 5;
// The area in which the plants are contained is circular, with a radius of 5 meters.
const PI = 3.1415;
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
const plantSpace = 0.8;
// The area is starting with 20 plants.
let plantsTotal = 20;
// The plants double in number every week.
// Seting the capacity variable
let capacity = plantsTotal * plantSpace;


// Predict the plant growth after a specific number of weeks.

// if capacity is equal or greater than 80% then set the condition to pruned
if (capacity >= area * 0.8){
    console.log(`Pruned`);
} else if (capacity >= area * 0.5) {
    console.log(`Monitored`);
} else {
    console.log(`Planted`);
}

//--------------------------2 weeks
plantsTotal = plantsTotal * 2;
capacity = plantsTotal * plantSpace;


if (capacity >= area * 0.8){
    console.log(`Pruned`);
} else if (capacity >= area * 0.5) {
    console.log(`Monitored`);
} else {
    console.log(`Planted`);
}

//--------------------------3 weeks
plantsTotal = plantsTotal * 2;
capacity = plantsTotal * plantSpace;

if (capacity >= area * 0.8){
    console.log(`Pruned`);
} else if (capacity >= area * 0.5) {
    console.log(`Monitored`);
} else {
    console.log(`Planted`);
}

// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
plantsTotal = 100;
plantsTotal = plantsTotal * 2 ** 10;
capacity = plantsTotal * plantSpace;
console.log(`Amount of additional space needed: ${capacity} meters`)
// If the space remained circular, what would be the radius of this expanded garden?
const newArea = PI * radius * radius;

try {
    // If the amount of space required to hold the originally provided number of plants exceeds the amount of space available
    if (capacity > area){
        throw "Error - total of plants exceeds space available.";
    }
} catch (error) {
    console.error(error)
}
