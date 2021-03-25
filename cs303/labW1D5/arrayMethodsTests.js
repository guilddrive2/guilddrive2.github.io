"use strict";
/* global require */
const methods = require("./methods.js");
const assert = require("assert");


/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/
describe("filterRange", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        let filtered = methods.filterRange(arr, 1, 4);
        assert.deepEqual(filtered, [3, 1]);
    });

    it("doesn't change the array", function () {
        let arr = [5, 3, 8, 1];
        let filtered = methods.filterRange(arr, 1, 4);
        assert.deepEqual(arr, [5, 3, 8, 1]);
    });
});

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/
describe("filterRangeInPlace", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        methods.filterRangeInPlace(arr, 1, 4);
        assert.deepEqual(arr, [3, 1]);
    });

    it("doesn't return anything", function () {
        assert.isUndefined(methods.filterRangeInPlace([1, 2, 3], 1, 4));
    });
});

/* 
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.  (see https://javascript.info/array-methods)
*/
describe("Calculator", function () {
    let calculator;

    before(function () {
        calculator = new methods.Calculator();
    });

    it("calculate(12 + 34) = 46", function () {
        assert.equal(calculator.calculate("12 + 34"), 46);
    });

    it("calculate(34 - 12) = 22", function () {
        assert.equal(calculator.calculate("34 - 12"), 22);
    });

    it("add multiplication: calculate(2 * 3) = 6", function () {
        calculator.addMethod("*", (a, b) => a * b);
        assert.equal(calculator.calculate("2 * 3"), 6);
    });

    it("add power: calculate(2 ** 3) = 8", function () {
        calculator.addMethod("**", (a, b) => a ** b);
        assert.equal(calculator.calculate("2 ** 3"), 8);
    });
});

/* Create a function unique(arr) that should return an array with unique items of arr. */
describe("unique", function () {
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"];
    it("tests unique hare krishnas", function () {
        assert.deepStrictEqual(methods.unique(strings), ["Hare", "Krishna", ":-O"]);
    });
});


/*
Let’s say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
see example:  https://javascript.info/array-methods
Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.
*/
describe("groupById", function() {

    it("creates an object grouped by id", function() {
      let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
      ];
  
      assert.deepStrictEqual(methods.groupById(users), {
        john: {id: 'john', name: "John Smith", age: 20},
        ann: {id: 'ann', name: "Ann Smith", age: 24},
        pete: {id: 'pete', name: "Pete Peterson", age: 31},
      });
    });
  
    it("works with an empty array", function() {
      users = [];
      assert.deepStrictEqual(methods.groupById(users), {});
    });
  });