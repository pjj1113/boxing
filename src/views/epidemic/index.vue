<template>
  <div class="epidemic">
    <div class="epidemic-left">
      <div class="conter-box">
        <div class="conter-title"><span>社区服务开展统计</span></div>
        <div class="conter-detail shequfuwu">
          <ul>
            <li>
              <span>党支部数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>党员数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>优秀党员</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>男性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>女性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>建党成果</span></div>
        <div class="conter-detail shequfuwu">
          <ul>
            <li>
              <span>党支部数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>党员数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>优秀党员</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>男性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>女性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>统计信息</span></div>
        <div class="conter-detail shequfuwu">
          <ul>
            <li>
              <span>党支部数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>党员数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>优秀党员</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>男性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>女性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="epidemic-right">
      <div class="conter-box">
        <div class="conter-title"><span>社区服务开展统计</span></div>
        <div class="conter-detail shequfuwu">
          <ul>
            <li>
              <span>党支部数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>党员数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>优秀党员</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>男性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>女性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>建党成果</span></div>
        <div class="conter-detail shequfuwu">
          <ul>
            <li>
              <span>党支部数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>党员数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>优秀党员</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>男性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>女性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>统计信息</span></div>
        <div class="conter-detail shequfuwu">
          <ul>
            <li>
              <span>党支部数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>党员数</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>优秀党员</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>男性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
            <li>
              <span>女性</span>
              <span
                ><strong>{{ 312 }}</strong></span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.epidemic {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  .epidemic-left {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
  .epidemic-right {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
}
.shequfuwu {
  ul {
    min-height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
    box-sizing: border-box;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      margin: 0.15rem 0;
      span {
        font-size: 0.18rem;
        font-weight: 500;
        strong {
          color: #00fe90;
          font-size: 0.30rem;
        }
      }
    }
  }
}
.conter-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  .conter-title {
    position: relative;
    color: #fff;
    font-size: 0.24rem;
    height: 0.4rem;
    &::after {
      position: absolute;
      bottom: -0.1rem;
      left: 0;
      height: 0.1rem;
      width: 100%;
      content: "";
      display: inline-block;
      background: url("../../assets/person/title_bottom.png") no-repeat;
      background-size: 100% 100%;
    }
    span {
      display: inline-block;
      position: relative;
      text-indent: 0.24rem;
      &::after {
        position: absolute;
        top: 0.05rem;
        left: 0;
        content: "";
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        border: 0.02rem solid #65beff;
        border-radius: 50%;
        opacity: 1;
      }
    }
  }
  .conter-detail {
    position: relative;
    width: 100%;
    border-left: 0.01rem solid #00d8ff;
    margin-top: 0.2rem;
    background: linear-gradient(
      90deg,
      rgba(1, 7, 21, 0.9) 0%,
      rgba(1, 10, 23, 0.6) 100%
    );
  }
}
</style>