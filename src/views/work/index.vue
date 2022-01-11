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
          <div id="myChart" style="height: 2rem; width: 3rem"></div>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>最新事件排名</span></div>
        <div class="conter-detail">
          <ul class="ul-table">
            <li>
              <span></span>
              <span>事件类型</span>
              <span>信息数量</span>
              <span>办理进度</span>
              <span>负责人员</span>
            </li>
            <li>
              <span>1</span>
              <span>政策咨询</span>
              <span>23</span>
              <span>待派发</span>
              <span>张**</span>
            </li>
            <li>
              <span>2</span>
              <span>政策咨询</span>
              <span>23</span>
              <span>待派发</span>
              <span>张**</span>
            </li>
            <li>
              <span>3</span>
              <span>政策咨询</span>
              <span>23</span>
              <span>待派发</span>
              <span>张**</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="work-right">
      <div class="conter-box renkouqinkuan wangluo">
        <div class="conter-title"><span>“一网统管”网格员</span></div>
        <div class="conter-detail">
          <ul>
            <li>
              <span>楼门长数量</span>
              <span
                ><strong>{{ 21 }}</strong></span
              >
            </li>
            <li>
              <span>社工数量</span>
              <span
                ><strong>{{ 323 }}</strong></span
              >
            </li>
          </ul>

          <p>社工名单</p>
          <div class="shegong">
            <p v-for="i in 4">
              <img/>
              <span>张三</span>
            </p>
          </div>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>事件来源统计</span></div>
        <div class="conter-detail eventlaiyuan">
          <ul>
            <li>
              <span>12345热线</span>
              <i></i>
              <strong>{{ 21 }}</strong>
            </li>
            <li>
              <span>12345热线</span>
              <i></i>
              <strong>{{ 21 }}</strong>
            </li>
            <li>
              <span>12345热线</span>
              <i></i>
              <strong>{{ 21 }}</strong>
            </li>
            <li>
              <span>12345热线</span>
              <i></i>
              <strong>{{ 21 }}</strong>
            </li>
            <li>
              <span>12345热线</span>
              <i></i>
              <strong>{{ 21 }}</strong>
            </li>
            <li>
              <span>12345热线</span>
              <i></i>
              <strong>{{ 21 }}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
.eventlaiyuan {
  padding: 0.15rem;
  box-sizing: border-box;
  ul {
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 0.5rem;
      span {
        display: inline-block;
      }
      i {
        display: inline-block;
        width: 3rem;
        height: 0.2rem;
        background: #3dadf9;
      }
    }
  }
}
.ul-table {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 0.2rem;
  li {
    display: flex;
    line-height: 0.5rem;
    span {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 0.16rem;
      &:nth-child(1) {
        flex: 0.4rem;
      }
      &:nth-child(2) {
        flex: 1;
      }
      &:nth-child(3) {
        flex: 1;
      }
      &:nth-child(4) {
        flex: 1;
      }
      &:nth-child(5) {
        flex: 1;
      }
    }
    &:nth-child(even) {
      background: #224853;
    }
    &:nth-child(odd) {
      background: #112530;
    }
  }
  :nth-child(1) span {
    background: #999;
  }
}

.shijianzhanbi {
  height: 2rem;
}
.wangluo {
  ul {
    li {
      flex-direction: row;
      justify-content: flex-start;
      width: 50%;
      span {
        font-weight: 400;
        strong {
          font-size: 0.2rem;
          padding-left: 0.2rem;
        }
      }
    }
  }
  p {
    font-size: 0.18rem;
  }
  .shegong {
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      justify-items: center;
      align-items: center;
      flex-direction: column;
      width: 23%;
      img {
        width: 100%;
        height: 1.5rem;
      }
      span {
        font-size: 0.16rem;
        margin-top: 0.1rem;
      }
    }
  }
}
.conter-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #071726bd;
  padding: 0.12rem;
  border-radius: 0.05rem;
  margin-bottom: 0.15rem;
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
    margin-top: 0.2rem;
  }
}
</style>