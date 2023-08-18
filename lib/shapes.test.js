const { Circle, Square, Triangle } = require("./shapes")

describe('Circle', () => {
    it('should render correctly', () => {
        const shape = new Circle();
        const color = 'yellow';
        shape.setColor(color);
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="150" r="75" fill="${color}"/>`
        );
    });
});
describe('Square', () => {
    it('should render correctly', () => {
        const shape = new Square();
        const color = "blue";
        shape.setColor(color);
        expect(shape.render()).toEqual(
            `<rect x="70" y="70" width="160" height="160"  fill="${color}"/>`
        );
    });
});
describe("Triangle", () => {
    it("should render correctly", () => {
        const shape = new Triangle();
        const color = "purple";
        shape.setColor(color);
        expect(shape.render()).toEqual(
            `<polygon points="0,200 300,200 150,0" fill="${color}" x="80" y ="90"/>`
        );
    });
});