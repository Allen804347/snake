export enum Direction {
  up = 'ArrowUp',
  down = 'ArrowDown',
  left = 'ArrowLeft',
  right = 'ArrowRight',
}

export const reverseDirection = {
  [Direction.up]: Direction.down,
  [Direction.down]: Direction.up,
  [Direction.left]: Direction.right,
  [Direction.right]: Direction.left,
}

export class Cell {
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  x: number
  y: number
}
