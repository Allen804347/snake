<script setup lang="ts">
import { Cell, Direction } from '../types/Cell'
import CellComponent from './Cell.vue'
const x = 8
const y = 8
const cells: Cell[] = [new Cell(x, y), new Cell(x - 1, y), new Cell(x - 2, y)]

// direction and keyboard event
let direction = $ref(Direction.right)
window.addEventListener('keyup', ({ key }) => {
  if (key === 'ArrowUp') {
    direction = Direction.up
    return
  }
  if (key === 'ArrowDown') {
    direction = Direction.down
    return
  }
  if (key === 'ArrowLeft') {
    direction = Direction.left
    return
  }
  if (key === 'ArrowRight')
    direction = Direction.right
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
