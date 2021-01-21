<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
button {
  border-radius: 10px;
  border: none;
  padding: 10px;
  min-width: 120px;
  font-weight: 600;
  outline: none;
  background: #ddd;
  cursor: pointer;
  text-transform: uppercase;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
