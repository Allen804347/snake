<script setup lang="ts">
import { Cell, Direction, reverseDirection } from '../types/Cell'
import CellComponent from './Cell.vue'

const x = 8
const y = 8

const cells: Cell[] = $ref([new Cell(x, y), new Cell(x - 1, y), new Cell(x - 2, y)])

// direction and keyboard event
let candidateDirection: Direction = Direction.right
let direction: Direction = Direction.right

window.addEventListener('keyup', ({ key }) => {
  // default direction is current value
  let tempDirection: Direction = direction
  if (key === Direction.up)
    tempDirection = Direction.up

  if (key === Direction.down)
    tempDirection = Direction.down

  if (key === Direction.left)
    tempDirection = Direction.left

  if (key === Direction.right)
    tempDirection = Direction.right

  // snake can not turn reverse direction
  if (tempDirection === reverseDirection[direction])
    return

  // put key event to candidate direction, so direction wont updated before move been invoke
  candidateDirection = tempDirection
})
let isDead = false
let last: Cell = new Cell(x - 3, y)
// move
const move = () => {
  if (isDead === true)
    return
  let { x: tempX, y: tempY } = cells[0]
  if (candidateDirection === Direction.up)
    tempY -= 1
  if (candidateDirection === Direction.down)
    tempY += 1
  if (candidateDirection === Direction.right)
    tempX += 1
  if (candidateDirection === Direction.left)
    tempX -= 1

  // update direction
  direction = candidateDirection

  // remove tail
  last = cells.pop() || last

  // add new head
  cells.unshift(new Cell(tempX, tempY))
}

const die = () => {
  isDead = true
}

const getHead = () => {
  return cells[0]
}

const checkCollision = (x: number, y: number, startFrom = 0) => {
  for (let i = startFrom; i < cells.length; i++) {
    if (x === cells[i].x && y === cells[i].y)
      return true
  }
  return false
}

const checkSelfCollision = (x = cells[0].x, y = cells[0].y) => {
  return checkCollision(x, y, 1)
}

const growth = () => {
  cells.push(last)
}

defineExpose({
  move,
  die,
  growth,
  getHead,
  checkCollision,
  checkSelfCollision,
})
</script>

<template>
  <CellComponent
    v-for="cell, index in cells"
    :key="index"
    :position-x="cell.x"
    :position-y="cell.y"
  />
</template>
