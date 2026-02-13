import { gym } from "../src/gym.js";

describe("gym calculates total membership cost with friends discount", function () {

    it("0 friends → 0% discount", function () {
        let total = gym(100, 0);
        expect(total).toBe(100);
    });

    it("1 friend → 5% discount", function () {
        let total = gym(100, 1);
        expect(total).toBe(95);
    });

    it("2 friends → 10% discount", function () {
        let total = gym(100, 2);
        expect(total).toBe(90);
    });

    it("3 friends → 15% discount", function () {
        let total = gym(100, 3);
        expect(total).toBe(85);
    });

    it("4 friends → 15% discount (3+ friends)", function () {
        let total = gym(100, 4);
        expect(total).toBe(85);
    });

});
