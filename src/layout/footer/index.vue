<template>
  <div class="footer">
    <ul>
      <li><router-link to="/person_room">人房数据</router-link></li>
      <li><router-link to="/trip">出行数据</router-link></li>
      <li><router-link to="/notOtherwise">未述先办</router-link></li>
      <li><router-link to="/epidemic">疫情防控</router-link></li>
      <li><router-link to="/community">社区服务</router-link></li>
      <li><router-link to="/work">工作动态</router-link></li>
       <li><router-link to="/person_room">建党引领</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 0.7rem;
  ul {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    li {
      width: 140px;
      height: 40px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 40px;
        background: url('../../assets/home/bar_btn_off.png') no-repeat;
        background-size: 100% 100%;
         color: #fff;
      }
      .router-link-active {
        color: #fff;
        background: url('../../assets/home/bar_btn_active.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
.router-link-active {
  color: #fff;
  background: url('../../assets/home/bar_btn_active.png') no-repeat;
  background-size: 100% 100%;
}
</style>