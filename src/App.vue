<script setup lang="ts">
// snake
// time machine
// food
const borderSize = 1
const grid = 10
</script>

<template>
  <div
    :style="{
      width: `${15 * grid}px`,
      height: `${15 * grid}px`,
      border: `${borderSize}px solid black`,
    }"
  >
    <div
      style="background-color: black; position: absolute;"
      :style="{
        width: `${1 * grid}px`,
        height: `${1 * grid}px`,
        top: `${borderSize + (7 * grid)}px`,
        left: `${borderSize + (3 * grid)}px`,
      }"
    />
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
