import { connectNodeAdapter } from "@connectrpc/connect-node";
import * as http2 from "http2";
import { readFileSync } from "fs";
import { TestService } from "./gen/test_connect.js";
import type { TestRequest } from "./gen/test_pb.js";
import { withReflection } from 'connect-grpcreflect-es';
import { ConnectRouter } from "@bufbuild/connect";

const refData = readFileSync('./gen/reflection.bin');

const server = connectNodeAdapter({ 
	routes: (router: ConnectRouter) => {
		return withReflection(
			refData,
			router.service(TestService, {
				doSomething: (req: TestRequest) => {
					return { text: req.data };
				}
			}),
		)
	},
});

const PORT = 8086;
http2.createServer(server).listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
