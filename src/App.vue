<template>
  <div>
    <h3>The the Game</h3>
    <canvas width="720" height="480" id="canvas" />
  </div>
</template>

<script>
import { __init } from "@/scripts/game.js";

export default {
  name: "App",
  mounted () {
    setTimeout(() => __init(), 300)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  position: relative;
  background-color: #262626;
}

canvas {
  display: block;
  background-color: #1a1a1a;
  margin: auto;
  margin-top: 5em;
}
</style>
