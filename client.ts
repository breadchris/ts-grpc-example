import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { ElizaService } from "./gen/eliza_connect.js";
import { stdin, stdout, env } from "process";
import * as readline from "node:readline/promises";

const rl = readline.createInterface(stdin, stdout);

let rejectUnauthorized = true;
// prettier-ignore
if (env.NODE_EXTRA_CA_CERTS == undefined) {
  rl.write("! Looks like you did not let Node.js know about your certificate authority for \n");
  rl.write("! local development yet. This is fine, we'll ignore TLS errors in this example \n");
  rl.write("! client. \n\n");
  rejectUnauthorized = false;
}

// Alternatively, use createGrpcTransport or createGrpcWebTransport here
// to use one of the other supported protocols.
const transport = createConnectTransport({
  httpVersion: "2",
  baseUrl: "https://localhost:8443",
  nodeOptions: { rejectUnauthorized },
});

void (async () => {
  const client = createPromiseClient(ElizaService, transport);

  const name = await rl.question("What is your name?\n> ");

  for await (const res of client.introduce({ name })) {
    rl.write(res.sentence + "\n");
  }

  for (;;) {
    const sentence = await rl.question("> ");
    const res = await client.say({ sentence });
    rl.write(res.sentence + "\n");
  }
})();
