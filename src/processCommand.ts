import { RawData } from 'ws';
import { draw, processMouseMove, makePrintScreen } from './performActions';

export async function processCommand(data: RawData) {
  const [cmd, ...args] = String(data).split(' ');
  switch (cmd.split('_')[0]) {
    case 'mouse':
      console.log('mouse', args);
      const response = await processMouseMove(cmd, args);
      return response;
    case 'draw':
      await draw(cmd, args);
      break;
    case 'prnt':
      const printScreen = await makePrintScreen(cmd, args);
      return printScreen;
  }
}
