import { RawData } from 'ws';

export interface LoggerPayload {
  id?: string;
  port?: number;
  data?: RawData;
  code?: number;
  error?: Error | unknown;
  response?: string | undefined;
}

export enum ServerStatus {
  START = 'start',
  CONNECTION = 'connection',
  MESSAGE = 'message',
  RESPONSE = 'response',
  CLOSE = 'close',
  ERROR = 'error',
}
