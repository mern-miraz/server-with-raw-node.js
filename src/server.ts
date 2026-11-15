import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import routeHandler from "./routes/routes";
const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandler(req, res);
  },
);

server.listen(config.port, () => {
  console.log(`Server is running successfully!! on this ${config.port}`);
});
