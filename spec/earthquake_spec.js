import { earthquake } from "../src/earthquake.js";

describe("earthquake returns the damage description based on Richter scale intensity", function () {

    it("intensity < 5 → Little or no damage", function () {
        let result = earthquake(4.8);
        expect(result).toBe("Little or no damage");
    });

    it("5 <= intensity < 5.5 → Some damage", function () {
        let result = earthquake(5.2);
        expect(result).toBe("Some damage");
    });

    it("5.5 <= intensity < 6.5 → Serious damage: walls may crack or fall", function () {
        let result = earthquake(6.0);
        expect(result).toBe("Serious damage: walls may crack or fall");
    });

    it("6.5 <= intensity < 7.5 → Disaster: buildings may collapse", function () {
        let result = earthquake(7.0);
        expect(result).toBe("Disaster: buildings may collapse");
    });

    it("intensity >= 7.5 → Catastrophe: most buildings destroyed", function () {
        let result = earthquake(8.0);
        expect(result).toBe("Catastrophe: most buildings destroyed");
    });

});
