<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #d7d7d7;
}
.fll {
  float: left;
}
.flr {
  float: right;
}
.clearfix::after {
  display: block;
  content: '';
  width: 0;
  height: 0;
  overflow: hidden;
  clear: both;
}
</style>
