import * as dotenv from "dotenv";
dotenv.config();

console.log(`It's ${new Date()}`);

console.log(process.env.AUTHOR || "ginger");
