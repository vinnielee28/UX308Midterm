// question 4
export function gym(cost, friends) {
    // processing
    let discount = 0;

    if (friends === 1) {
        discount = 0.05;
    } else if (friends === 2) {
        discount = 0.10;
    } else if (friends >= 3) {
        discount = 0.15;
    }

    // function
    let total = cost * (1 - discount);

    // output
    return total;
}

if (import.meta.main) {
    console.log(`gym(100, 0) returns ${gym(100, 0)}`); // 0 friends → 100
    console.log(`gym(100, 1) returns ${gym(100, 1)}`); // 1 friend → 95
    console.log(`gym(100, 2) returns ${gym(100, 2)}`); // 2 friends → 90
    console.log(`gym(100, 3) returns ${gym(100, 3)}`); // 3 friends → 85
    console.log(`gym(100, 4) returns ${gym(100, 4)}`); // 4 friends → 85
}