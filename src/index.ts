import { WebSocket, WebSocketServer } from 'ws';
import 'dotenv/config';

const PORT = Number(process.env.PORT) || 8080;

const wss = new WebSocketServer({ port: PORT });

wss.on('connection', function connection(ws) {
  console.log('ws connected');
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
