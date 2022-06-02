<script setup lang="ts">

let count = $ref(0)
const add = (a: number, b: number):number => a + b
const click = ()=> {
  count = add(count, Math.random())
}
</script>

<template>
</template>

<style scoped>
</style>
