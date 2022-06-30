<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import Snake from './components/Snake.vue'
// snake
const MSperTick = 500
// food
const borderSize = 1
const mapSize = 25
const grid = 10

// time engine
let task: number
// snake
const snake = $ref(null)
// fruit
let fruitX = $ref(0)
let fruitY = $ref(0)

// random show
const renewFruit = () => {
  const newX = Math.ceil(Math.random() * mapSize)
  const newY = Math.ceil(Math.random() * mapSize)
  // fruit should not born on snake
  if (!snake.checkCollision(newX, newY)) {
    fruitX = newX
    fruitY = newY
    return
  }
  // re renew
  renewFruit()
}

const start = (): void => {
  if (task !== null)
    clearInterval(task)

  task = setInterval(() => {
    // snake move
    snake.move()
    // check fruit
    if (snake.checkCollision(fruitX, fruitY)) {
      // growth snake if need
      // renew fruit if need
      renewFruit()
    }
    // check snake is live or death
    const { x, y } = snake.getHead()
    if (snake.checkSelfCollision() || x <= 0 || y <= 0 || x > mapSize || y > mapSize)
      snake.die()
  }, MSperTick)
}
start()

// init
onMounted(renewFruit)
// can be eat
</script>

<template>
  <div
    :style="{
      width: `${mapSize * grid}px`,
      height: `${mapSize * grid}px`,
      border: `${borderSize}px solid black`,
    }"
  >
    <Snake ref="snake" />
    <div
      style="background-color: red; position: absolute;"
      :style="{
        width: `${1 * grid}px`,
        height: `${1 * grid}px`,
        top: `${borderSize + (fruitY * grid)}px`,
        left: `${borderSize + (fruitX * grid)}px`,
      }"
    />
  </div>
</template>

<style>
</style>
