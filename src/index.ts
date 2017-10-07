import * as dotenv from "dotenv";  // => touch .env
dotenv.config();

console.log(`It's ${new Date()}`);

console.log(process.env.AUTHOR || "ginger");
