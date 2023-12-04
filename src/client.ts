import * as readline from "node:readline";
import { createPromiseClient } from "@connectrpc/connect";
import { ElizaService } from "./gen/eliza_connect";
import { createConnectTransport } from "@connectrpc/connect-node";

const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
    httpVersion: "1.1",
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export async function mainClient() {
    const client = createPromiseClient(ElizaService, transport);
    rl.question("Enter a sentence: ", async (sentence) => {
        const res = await client.say({ sentence });
        console.log(res);
        rl.close();
    });
}
