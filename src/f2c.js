//question 2
export function f2c(fahrenheit){
    // processing
    let celsius = (fahrenheit - 32) * (5 / 9);

    // function
    return parseFloat(celsius.toFixed(2));
}

if (import.meta.main){
    console.log(`f2c(32) returns ${f2c(32)}`);   // Freezing
    console.log(`f2c(212) returns ${f2c(212)}`); // Boiling
    console.log(`f2c(70) returns ${f2c(70)}`);   // Room temperature
}
