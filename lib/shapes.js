class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(text) {
        super();
        this.text = text;
    }
    render() {
        return `
    <polygon 
    points="0,200 300,200 150,0"  
    fill="${this.color}" 
    x="80" y ="90"/>
    `;
    }
}

class Circle extends Shape {
    constructor(text) {
        super();
        this.text = text;
    }
    render() {
        return `
    <circle
    cx="150"
    cy="150"
    r="75"
    fill="${this.color}" />
    `;
    }
}

class Square extends Shape {
    constructor(text) {
        super();
        this.text = text;
    }
    render() {
        return `
    <rect
    x="70"
    y="70"
    width="160"
    height="160"
    fill="${this.color}"/>
    `;
    }
}

module.exports = { Triangle, Circle, Square };
