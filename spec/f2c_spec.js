import { f2c } from "../src/f2c.js";

describe("f2c converts Fahrenheit to Celsius", function () {

    it("converts freezing temperature 32°F", function () {
        let celsius = f2c(32);
        expect(celsius).toBe(0);
    });

    it("converts boiling temperature 212°F", function () {
        let celsius = f2c(212);
        expect(celsius).toBe(100);
    });

    it("converts room temperature 70°F", function () {
        let celsius = f2c(70);
        expect(celsius).toBeCloseTo(21.111, 3);
    });

});
