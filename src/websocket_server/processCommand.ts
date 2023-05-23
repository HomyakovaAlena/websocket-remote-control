import { RawData } from 'ws';
import { logCurrentServerStatus } from './logger';
import { draw, processMouseMove, makePrintScreen } from './performActions';
import { ServerStatus } from './types';

export async function processCommand(data: RawData) {
  try {
    const [cmd, ...args] = String(data).split(' ');
    switch (cmd.split('_')[0]) {
      case 'mouse':
        const response = await processMouseMove(cmd, args);
        return response;
      case 'draw':
        await draw(cmd, args);
        break;
      case 'prnt':
        const printScreen = await makePrintScreen();
        return printScreen;
    }
  } catch (error) {
    logCurrentServerStatus(ServerStatus.ERROR, { error });
  }
}
