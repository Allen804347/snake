<script setup lang="ts">
import Snake from './components/Snake.vue'
// snake
const MSperTick = 1000
// food
const borderSize = 1
const mapSize = 15
const grid = 10

// time engine
let task: number
const snake = $ref(null)

const start = (): void => {
  if (task !== null)
    clearInterval(task)

  task = setInterval(() => {
    // snake move
    snake.move()
    // check fruit
    // growth snake if need
    // check snake is live or death
    const { x, y } = snake.getHead()
    if (snake.checkCollision() || x <= 0 || y <= 0 || x > mapSize || y > mapSize)
      snake.die()
    // renew fruit if need
  }, MSperTick)
}
start()
</script>

<template>
  <div
    :style="{
      width: `${15 * grid}px`,
      height: `${15 * grid}px`,
      border: `${borderSize}px solid black`,
    }"
  >
    <Snake ref="snake" />
    <div
      style="background-color: red; position: absolute;"
      :style="{
        width: `${1 * grid}px`,
        height: `${1 * grid}px`,
        top: `${borderSize + (3 * grid)}px`,
        left: `${borderSize + (3 * grid)}px`,
      }"
    />
  </div>
</template>

<style>
</style>
