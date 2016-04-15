/// <reference path="../typings/main.d.ts" />

import {Testee} from "../src/Testee";

describe("When using AddTwo", () => {
    it("with one it should make three", () => {
        expect(Testee.AddTwo(1)).toBe(3);
    });
});