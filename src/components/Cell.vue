<script setup lang="ts">
// import Cell from '../types/Cell'
const {
  baseTop, baseLeft, positionX, positionY,
} = defineProps<{
  positionX: number
  positionY: number
  baseTop: number
  baseLeft: number
}>()

const gridSize = 10
</script>

<template>
  <div
    class="cell"
    :style="{
      width: `${1 * gridSize}px`,
      height: `${1 * gridSize}px`,
      top: `${baseTop + (positionY * gridSize)}px`,
      left: `${baseLeft + (positionX * gridSize)}px`,
    }"
  />
</template>

<style scoped>
  .cell {
    background-color: black;
    position: absolute;
  }
</style>
