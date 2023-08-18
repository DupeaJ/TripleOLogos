const fs = require("fs");
const inquirer = require("inquirer");

const { Circle, Square, Triangle } = require("./lib/shapes");
const Svg = require('./Svg');

const questions = [
    {
        type: "input",
        message: "Choose up to 3 characters for your' logo",
        name: "text",
        validate: function (input) {
            if (input.length <= 3) {
                return true;
            }
            return "must enter a value of 3 or less";
        },
    },
    {
        type: "input",
        message: "What color do you want for the text of your logo",
        name: "textColor",
    },
    {
        type: "list",
        message: "Choose a shape for your logo",
        choices: ["Triangle", "Circle", "Square"],
        name: "shape",
    },
    {
        type: "input",
        message: "What Shape color do you want for your logo",
        name: "shapeColor",
    },
];

inquirer.prompt(questions).then((answers) => {
    let userChoice;
    if (answers.shape === "Circle") {
        userChoice = new Circle(answers.text);
        userChoice.setColor(answers.shapeColor);
    } else if (answers.shape === "Triangle") {
        userChoice = new Triangle(answers.text);
        userChoice.setColor(answers.shapeColor);
    } else {
        userChoice = new Square(answers.text);
        userChoice.setColor(answers.shapeColor);
    }

    const svg = new Svg();
    svg.setTextElement(answers.text, answers.textColor);
    svg.setShapeElement(userChoice);

    const filename = `logo_${answers.shape}_${answers.shapeColor}.svg`;
    fs.writeFile(`./examples/${filename}`, svg.render(), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!");
        }
    });
});