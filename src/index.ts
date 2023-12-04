import { mainClient } from "./client";
import { mainServer } from "./server";

const args = process.argv.slice(2);

if (args.includes("--server")) {
    void mainServer();
} else if (args.includes("--client")) {
    void mainClient();
} else {
    console.log("Invalid argument. Please use --server or --client.");
}
