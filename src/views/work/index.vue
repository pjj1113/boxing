<template>
  <div class="work">
    <div class="work-left">
      <div class="conter-box renkouqinkuan">
        <div class="conter-title"><span>工作动态概览</span></div>
        <div class="conter-detail">
          <div class="other-person">
            <div class="party">
              <p>事项办理</p>
              <ul>
                <li>
                  <span>待受理</span>
                  <span
                    ><strong>{{ 3 }}</strong></span
                  >
                </li>
                <li>
                  <span>已受理</span>
                  <span
                    ><strong>{{ 3 }}</strong></span
                  >
                </li>
                <li>
                  <span>已完成</span>
                  <span
                    ><strong>{{ 3 }}</strong></span
                  >
                </li>
              </ul>
            </div>
            <div class="children">
              <p>事件处理</p>
              <ul>
                <li>
                  <span>事件总数</span>
                  <span
                    ><strong>{{ 3 }}</strong></span
                  >
                </li>
                <li>
                  <span>处理中</span>
                  <span
                    ><strong>{{ 3 }}</strong></span
                  >
                </li>
                <li>
                  <span>未处理</span>
                  <span
                    ><strong>{{ 3 }}</strong></span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>事件类型占比分析</span></div>
        <div class="conter-detail shijianzhanbi">
          <div id="myChart" style="height: 3rem; width: 3rem"></div>
        </div>
      </div>
    </div>
    <div class="work-right"></div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
export default {
  data() {
    return {};
  },
  mounted() {
    let option = {
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
          // emphasis: {
          //   itemStyle: {
          //     shadowBlur: 10,
          //     shadowOffsetX: 0,
          //     shadowColor: "rgba(0, 0, 0, 0.5)",
          //   },
          // },
        },
      ],
    };
    var myChart = echarts.init(document.getElementById("myChart"));
    myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.work {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  .work-left {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
  .work-right {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
}

.renkouqinkuan {
  display: flex;
  flex-direction: column;
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
      span {
        font-size: 0.18rem;
        font-weight: 500;
        strong {
          color: #00fe90;
          font-size: 0.4rem;
        }
      }
    }
  }
  .other-person {
    width: 100%;
    display: flex;
    p {
      text-align: center;
    }
    .party {
      width: 50%;
    }
    .children {
      width: 50%;
    }
  }
}

.shijianzhanbi {
  height: 3rem;
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