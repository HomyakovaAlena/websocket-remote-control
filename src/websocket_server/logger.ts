import { LoggerPayload, ServerStatus } from './types';

export function logCurrentServerStatus(
  status: ServerStatus,
  payload: LoggerPayload
) {
  switch (status) {
    case ServerStatus.START:
      console.log(`WebSocket server started on port ${String(payload.port)}`);
      break;

    case ServerStatus.CONNECTION:
      console.log(`New Client (id=${String(payload.id)}) connected`);
      break;

    case ServerStatus.MESSAGE:
      console.log(
        `Client (id=${String(payload.id)}) sent message: ${String(
          payload.data
        )}`
      );
      break;

    case ServerStatus.RESPONSE:
      const response =
        payload.response ?? `action ${String(payload.data)} performed`;
      console.log(
        `Server answered to Client (id=${String(
          payload.id
        )}), response: ${String(response)}`
      );
      break;

    case ServerStatus.CLOSE:
      console.log(
        `Client (id=${String(
          payload.id
        )}) closed connection, status code: ${String(payload.code)}`
      );
      break;

    case ServerStatus.ERROR:
      console.log(`Error occured: ${String(payload.error)}`);
      break;
  }
}
