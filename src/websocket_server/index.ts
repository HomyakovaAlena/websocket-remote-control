import { RawData, WebSocketServer } from 'ws';
import 'dotenv/config';
import { processCommand } from './processCommand';
import { logCurrentServerStatus } from './logger';
import { ServerStatus } from './types';

const port = Number(process.env.PORT) || 8080;

const wss = new WebSocketServer({ port });
logCurrentServerStatus(ServerStatus.START, { port });

wss.on(ServerStatus.CONNECTION, (wsClient, req) => {
  const id = String(req.headers['sec-websocket-key']);
  logCurrentServerStatus(ServerStatus.CONNECTION, { id });

  wsClient.on(ServerStatus.MESSAGE, async (data: RawData) => {
    logCurrentServerStatus(ServerStatus.MESSAGE, { id, data });

    const response = await processCommand(data);
    if (response) wsClient.send(response);
    logCurrentServerStatus(ServerStatus.RESPONSE, { id, response, data });
  });

  wsClient.on(ServerStatus.CLOSE, (code) => {
    logCurrentServerStatus(ServerStatus.CLOSE, { code });
  });

  wsClient.on(ServerStatus.ERROR, (error) => {
    logCurrentServerStatus(ServerStatus.ERROR, { error });
  });
});
