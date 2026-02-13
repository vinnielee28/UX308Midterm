// question 3
export function h2v(height) {
    // processing
    let volume = Math.pow(height, 3);

    // function
    return volume;
}

if (import.meta.main) {
    console.log(`h2v(1) returns ${h2v(1)}`);   // 1 m³
    console.log(`h2v(2) returns ${h2v(2)}`);   // 8 m³
    console.log(`h2v(3) returns ${h2v(3)}`);   // 27 m³
}