import { mouse, left, right, up, down, FileType } from '@nut-tree/nut-js';
import { drawCircle, drawRectangle, drawSquare } from './draw';
import { screen, Region } from '@nut-tree/nut-js';
import * as fs from 'node:fs/promises';

export async function processMouseMove(cmd: string, args: string[]) {
  console.log(cmd, args);
  const direction = cmd.split('_')[1];
  const distance = Number(args[0]);
  switch (direction) {
    case 'left':
      await mouse.move(left(distance));
      break;
    case 'right':
      await mouse.move(right(distance));
      break;
    case 'up':
      await mouse.move(up(distance));
      break;
    case 'down':
      await mouse.move(down(distance));
      break;
    case 'position':
      const position = await mouse.getPosition();
      return `mouse_position ${position.x},${position.y}`;
  }
}

export async function draw(cmd: string, args: string[]) {
  console.log(cmd, args);
  const figure = cmd.split('_')[1];
  const [width, height] = args.map(Number);
  switch (figure) {
    case 'square':
      await drawSquare(width);
      break;
    case 'circle':
      await drawCircle(width);
      break;
    case 'rectangle':
      await drawRectangle(width, height);
      break;
  }
}

export async function makePrintScreen(cmd: string, args: string[]) {
  console.log(cmd, args);
  const { x, y } = await mouse.getPosition();
  const screenRegion = new Region(x, y, 200, 200);
  const picture = await screen.captureRegion(
    'picture',
    screenRegion,
    FileType.PNG
  );
  const contents = await fs.readFile(picture, { encoding: 'base64' });
  await fs.unlink('./picture.png');
  return `prnt_scrn ${contents}`;
}
