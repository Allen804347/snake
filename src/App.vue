<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import Snake from './components/Snake.vue'
// snake
const MSperTick = 250
// food
const borderSize = 1
const mapSize = 25
const grid = 10

// time engine
let task: number
// snake
const snake = $ref(null)
const base = $ref(null)
let baseTop = $ref(borderSize)
let baseLeft = $ref(borderSize)

// fruit
let fruitX = $ref(0)
let fruitY = $ref(0)

// random show
const renewFruit = () => {
  const newX = Math.floor(Math.random() * mapSize)
  const newY = Math.floor(Math.random() * mapSize)
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
      snake.growth()
      // renew fruit if need
      renewFruit()
    }
    // check snake is live or death
    const { x, y } = snake.getHead()
    if (snake.checkSelfCollision() || x < 0 || y < 0 || x >= mapSize || y >= mapSize)
      snake.die()
  }, MSperTick)
}
start()

// init
onMounted(() => {
  renewFruit()
  baseTop = base.offsetTop + borderSize
  baseLeft = base.offsetLeft + borderSize
})
// can be eat
</script>

<template>
  <div
    ref="base"
    :style="{
      width: `${mapSize * grid}px`,
      height: `${mapSize * grid}px`,
      border: `${borderSize}px solid black`,
    }"
  >
    <Snake ref="snake" :base-top="baseTop" :base-left="baseLeft" />
    <div
      style="background-color: red; position: absolute;"
      :style="{
        width: `${1 * grid}px`,
        height: `${1 * grid}px`,
        top: `${baseTop + (fruitY * grid)}px`,
        left: `${baseLeft + (fruitX * grid)}px`,
      }"
    />
  </div>
</template>

<style>
</style>
