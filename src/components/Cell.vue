<script setup lang="ts">
// import Cell from '../types/Cell'
const { positionX, positionY } = defineProps<{
  positionX: number
  positionY: number
}>()

const borderSize = 1
const gridSize = 10
</script>

<template>
  <div
    class="cell"
    :style="{
      width: `${1 * gridSize}px`,
      height: `${1 * gridSize}px`,
      top: `${borderSize + (positionY * gridSize)}px`,
      left: `${borderSize + (positionX * gridSize)}px`,
    }"
  />
</template>

<style scoped>
  .cell {
    background-color: black;
    position: absolute;
  }
</style>
