import {
  mouse,
  left,
  right,
  up,
  down,
  Point,
  straightTo,
  Button,
} from '@nut-tree/nut-js';
import { logCurrentServerStatus } from './logger';
import { ServerStatus } from './types';

export async function drawSquare(width: number) {
  try {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.move(down(width));
    await mouse.move(left(width));
    await mouse.move(up(width));
    await mouse.releaseButton(Button.LEFT);
  } catch (error) {
    logCurrentServerStatus(ServerStatus.ERROR, { error });
  }
}

export async function drawRectangle(width: number, height: number) {
  try {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.move(down(height));
    await mouse.move(left(width));
    await mouse.move(up(height));
    await mouse.releaseButton(Button.LEFT);
  } catch (error) {
    logCurrentServerStatus(ServerStatus.ERROR, { error });
  }
}

export async function drawCircle(radius: number) {
  try {
    let { x, y } = await mouse.getPosition();
    let angle = 0;
    const startPoint = new Point(x + radius, y);
    await mouse.setPosition(startPoint);
    await mouse.pressButton(Button.LEFT);
    while (angle !== 360) {
      const radians = (angle * Math.PI) / 180;
      const pointX = x + Math.cos(radians) * radius;
      const pointY = y + Math.sin(radians) * radius;
      const target = new Point(pointX, pointY);
      await mouse.move(straightTo(target));
      angle++;
    }
    await mouse.releaseButton(Button.LEFT);
  } catch (error) {
    logCurrentServerStatus(ServerStatus.ERROR, { error });
  }
}
