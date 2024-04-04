#! /usr/bin/env node
import inquirer from "inquirer";
const paragraph = await inquirer.prompt([
    {
        name: "paragraph",
        type: "input",
        message: "Enter a paragraph: ",
    },
    {
        name: "options",
        type: "list",
        message: "Select any one option:",
        choices: ["Count characters", "Count words"],
    },
]);
if (paragraph.options === "Count characters") {
    const characters = paragraph.paragraph.trim().replace(/\s+/g, "");
    console.log(`Total characters in your paragraph: ${characters.length}`);
}
else if (paragraph.options === "Count words") {
    const words = paragraph.paragraph.trim().split(" ");
    console.log(`Total words in your paragraph: ${words.length}`);
}
