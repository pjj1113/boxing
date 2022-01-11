<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('./style/index.css');
html,body,#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  color: #fff;
  background: url('./assets/bg.png') no-repeat;
  background-size: 100% 100%;
}
</style>
