const studentData = require("./data");
import { expectedResult } from "./dataExample";
import { objectMapper } from "./objectMapper";
import { expect, it } from "vitest";

it("should correctly format the data", ()=>{
    const result = objectMapper(studentData)
    expect(result).toStrictEqual(expectedResult);
});