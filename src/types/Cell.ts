export default interface Cell {
  x: number
  y: number
  next?: Cell
  move: Function
}
