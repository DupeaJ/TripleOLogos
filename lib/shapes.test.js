const { Circle, Square, Triangle } = require("./shapes")

describe('Circle', () => {
    test('rendors correct circle', () => {
        const shape = new Circle();
        var color = ('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy= "50%" r="100" height="100%" width="100%">`)
    });
});
describe("Square", () => {
    test("rendors correct Square", () => {
        const shape = new Square();
        var color = "blue";
        shape.setColor(color);
        expect(shape.render()).toEqual(
            `<rect x="50" y="50%" height="200" width="200" fill="${color}`
        );
    });
});
describe("Triangle", () => {
    test("rendors correct Triangle", () => {
        const shape = new Triangle();
        var color = "purple";
        shape.setColor(color);
        expect(shape.render()).toEqual(
            `<polygon height="100%" width="100%" points="0,200 300,200 150,0 fill=${color} `
        );
    });
});