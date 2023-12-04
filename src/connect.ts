import { ConnectRouter } from "@connectrpc/connect";
import { ElizaService } from "./gen/eliza_connect";
import { SayRequest, SayResponse } from "./gen/eliza_pb";

export default (router: ConnectRouter) =>
    router.service(ElizaService, {
        async say(req: SayRequest) {
            return new SayResponse({
                sentence: `You said: ${req.sentence}`,
            });
        },
    });
