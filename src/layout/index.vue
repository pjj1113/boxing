<template>
  <div class="layout">
    <Header/>
    <div class="layout-main">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './header'
import Main from './main'
import Footer from './footer'
export default {
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  width: 19.20rem;
  height: 100%;
  // background: #051425;
  .layout-main {
    position: relative;
    width: 100%;
    height: calc(100% - 260px);
  }
}
</style>