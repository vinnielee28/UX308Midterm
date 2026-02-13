import { coin } from "../src/coin.js";

describe("the coin function returns the total value of coins in dollars", function () {

    it("tests all zeros", function () {
        let total = coin(0, 0, 0, 0, 0);
        expect(total).toBe(0);
    });

    it("tests one of each coin", function () {
        let total = coin(1, 1, 1, 1, 1);
        expect(total).toBe(3.4);
    });

    it("tests multiple coins", function () {
        let total = coin(1, 2, 3, 4, 5);
        expect(total).toBe(15);
    });

});
