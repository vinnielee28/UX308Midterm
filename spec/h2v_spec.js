import { h2v } from "../src/h2v.js";

describe("h2v converts cube height to volume", function () {

    it("converts height 1 meter", function () {
        let volume = h2v(1);
        expect(volume).toBe(1); 
    });

    it("converts height 2 meters", function () {
        let volume = h2v(2);
        expect(volume).toBe(8); 
    });

    it("converts height 3 meters", function () {
        let volume = h2v(3);
        expect(volume).toBe(27); 
    });

});
