import "dotenv/config"; 
import * as cowsay from "cowsay"

console.log(cowsay.say({ text: `I am ${process.env.NAME} and I'm a wilder from the ${process.env.CAMPUS} campus` })
);