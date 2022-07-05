import chalk from "chalk";
import figlet from "figlet";
import greet from "./greet.js";

figlet("Hello Xola", (err, data) => {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.green(data));
    }
}
);

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage);
