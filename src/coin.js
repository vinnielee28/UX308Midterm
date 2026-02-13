//question 1
export function coin(nickels, dimes, quarters, loonies, toonies){
    //processing
    let total = (nickels * 0.05) +
                (dimes * 0.10) +
                (quarters * 0.25) +
                (loonies * 1.00) +
                (toonies * 2.00);
    //function
    return (total)
}

if (import.meta.main){
    console.log(`coin(0,0,0,0,0) returns ${coin(0,0,0,0,0)}`) //no coins
    console.log(`coin(1,1,1,1,1) returns ${coin(1,1,1,1,1)}`) //1 coin each
    console.log(`coin(1,2,3,4,5) returns ${coin(1,2,3,4,5)}`) //multiple coins
}