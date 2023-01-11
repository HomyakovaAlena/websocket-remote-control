import { RawData, WebSocket, WebSocketServer } from 'ws';
import 'dotenv/config';
import { processCommand } from './processCommand';

const PORT = Number(process.env.PORT) || 8080;

const wss = new WebSocketServer({ port: PORT });

wss.on('connection', function connection(ws) {
  console.log('ws connected');
  ws.on('message', async function message(data: RawData) {
    console.log('received: %s', data);
    const response = await processCommand(data);
    if (response) ws.send(response);
  });
});
