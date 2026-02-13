// question 5
export function earthquake(intensity) {
    //processing
    let result = "";

    if (intensity < 5) {
        result = "Little or no damage";
    } else if (intensity >= 5 && intensity < 5.5) {
        result = "Some damage";
    } else if (intensity >= 5.5 && intensity < 6.5) {
        result = "Serious damage: walls may crack or fall";
    } else if (intensity >= 6.5 && intensity < 7.5) {
        result = "Disaster: buildings may collapse";
    } else { // intensity >= 7.5
        result = "Catastrophe: most buildings destroyed";
    }
    //function
    return result;
}

if (import.meta.main) {
    console.log(`earthquake(4.8) returns ${earthquake(4.8)}`);  // Little or no damage
    console.log(`earthquake(5.2) returns ${earthquake(5.2)}`);  // Some damage
    console.log(`earthquake(6.0) returns ${earthquake(6.0)}`);  // Serious damage
    console.log(`earthquake(7.0) returns ${earthquake(7.0)}`);  // Disaster
    console.log(`earthquake(8.0) returns ${earthquake(8.0)}`);  // Catastrophe
}
