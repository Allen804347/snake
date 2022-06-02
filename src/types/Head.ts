import type Cell from './Cell'

export default class Head implements Cell {
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  x: number
  y: number
  move(): void {
    // delete last body
    // move head to new position
    // add new 1st body
    this.x += 1
    this.y += 1
  }
}
