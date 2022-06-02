<script setup lang="ts">
// snake
// time machine
// food
const grid = 10
</script>

<template>
  <div
    :style="{
      width: `${15 * grid}px`,
      height: `${15 * grid}px`,
    }"
  >
    <div
      style="background-color: black;position:absolute;"
      :style="{
        width: `${1 * grid}px`,
        height: `${1 * grid}px`,
        top: `${7 * grid}px`,
        left: `${3 * grid}px`,
      }"
    />
    <div
      style="background-color: red;position:absolute;"
      :style="{
        width: `${1 * grid}px`,
        height: `${1 * grid}px`,
        top: `${3 * grid}px`,
        left: `${3 * grid}px`,
      }"
    />
  </div>
</template>

<style>
</style>
