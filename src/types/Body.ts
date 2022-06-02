import  Cell  from "./Cell";

export default class Body implements Cell {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  x: number
  y: number
}
