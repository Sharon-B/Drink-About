describe("whatCanIDrink", function() {
// A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("check age", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
        // Expectations are built with the function expect which takes a value, called the actual.
        // Each matcher implements a boolean comparison between the actual value and the expected value.
        // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher
            expect(whatCanIDrink).toBeDefined(); 
        });

        it("should not return a drink when called as whatCanIDrink(0)", function() {
            let drink = whatCanIDrink(0)
            expect(drink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            let drink = whatCanIDrink(13)
            expect(drink).toBe("Drink Toddy");
        });

        it("should return drink coke when called as whatCanIDrink(17)", function() {
            let drink = whatCanIDrink(17)
            expect(drink).toBe("Drink Coke");
        });

        it("should return drink beer when called as whatCanIDrink(18)", function() {
            let drink = whatCanIDrink(18)
            expect(drink).toBe("Drink Beer");
        });

        it("should return drink beer when called as whatCanIDrink(20)", function() {
            let drink = whatCanIDrink(20)
            expect(drink).toBe("Drink Beer");
        });

        it("should return drink whiskey when called as whatCanIDrink(42)", function() {
            let drink = whatCanIDrink(42)
            expect(drink).toBe("Drink Whiskey");
        });

        it("should not return a drink when called as whatCanIDrink(135)", function() {
            let drink = whatCanIDrink(135)
            expect(drink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

    });
});
    

    