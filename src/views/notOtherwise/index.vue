<template>
  <div class="notOtherwise">
    <div class="notOtherwise-left">
      <div class="conter-box">
        <div class="conter-title"><span>12345热线</span></div>
        <div class="conter-detail 135">
          <div></div>
          <div style="width: 100%; height: 3rem" id="myChart"></div>
          <div
            style="width: 100%; height: 2.5rem; margin-top: 0.2rem"
            id="myChart1"
          ></div>
        </div>
      </div>
    </div>
    <div class="notOtherwise-right">
      <div class="conter-box">
        <div class="conter-title"><span>办理统计</span></div>
        <div class="conter-detail 135">
          <p>总办理工单</p>
          <ul class="list-show">
            <li>
              <span>已结办</span>
              <span><strong>{{ 2 }}</strong></span>
            </li>
            <li>
              <span>待接收</span>
              <span><strong>{{ 22 }}</strong></span>
            </li>
            <li>
              <span>在办件</span>
              <span><strong>{{ 23 }}</strong></span>
            </li>
            <li>
              <span>已逾期</span>
              <span><strong>{{ 56 }}</strong></span>
            </li>
            <li>
              <span>已回访</span>
              <span><strong>{{ 256 }}</strong></span>
            </li>
            <li>
              <span>退回工单</span>
              <span><strong>{{ 245 }}</strong></span>
            </li>
          </ul>

          <p>工单分类统计</p>
          <ul class="ul-table">
            <li>
              <span>事件类型</span>
              <span>信息数量</span>
              <span>办理进度</span>
              <span>负责人员</span>
            </li>
            <li>
              <span>婚姻家庭纠纷</span>
              <span>806</span>
              <span>
                <ul class="list-jindu">
                  <li> <strong></strong><i>21</i></li>
                </ul>
              </span>
              <span>张*</span>
            </li>
            <li>
              <span>婚姻家庭纠纷</span>
              <span>806</span>
              <span>
                <ul class="list-jindu">
                  <li> <strong></strong><i>21</i></li>
                </ul>
              </span>
              <span>张*</span>
            </li>
            <li>
              <span>婚姻家庭纠纷</span>
              <span>806</span>
              <span>
                <ul class="list-jindu">
                  <li> <strong></strong><i>21</i></li>
                </ul>
              </span>
              <span>张*</span>
            </li>
            <li>
              <span>婚姻家庭纠纷</span>
              <span>806</span>
              <span>
                <ul class="list-jindu">
                  <li> <strong></strong><i>21</i></li>
                </ul>
              </span>
              <span>张*</span>
            </li>
          </ul>

          <p>社区办事统计</p>
          <ul class="ul-table banshitongji">
            <li>
              <span>接收时间</span>
              <span>投诉人</span>
              <span>办理</span>
              <span>姓名</span>
              <span>居住地址</span>
            </li>
            <li>
              <span>2022-01-01</span>
              <span>李**</span>
              <span></span>
              <span>张**</span>
              <span>好景国际</span>
            </li>
            <li>
              <span>2022-01-01</span>
              <span>李**</span>
              <span></span>
              <span>张**</span>
              <span>好景国际</span>
            </li>
            <li>
              <span>2022-01-01</span>
              <span>李**</span>
              <span></span>
              <span>张**</span>
              <span>好景国际</span>
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
      xAxis: {
        type: "category",
        data: ["经开壹中心", "科创家园二期", "亦城文园", "汀城家园", "亦城名苑",],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
    var myChart = echarts.init(document.getElementById("myChart1"));
    myChart.setOption(option);

    let option2 = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "突发应急" },
            { value: 735, name: "住宅维护" },
            { value: 580, name: "小区管理" },
            { value: 484, name: "行政服务" },
            { value: 300, name: "社会服务" },
          ],
        },
      ],
    };
    var myChart1 = echarts.init(document.getElementById("myChart"));
    myChart1.setOption(option2);
  },
};
</script>

<style lang="scss" scoped>
.notOtherwise {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  .notOtherwise-left {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
  .notOtherwise-right {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
}
.notOtherwise-right {
  p {
    text-align: center;
  }
}
.list-show {
  height: 1.2rem;
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
.ul-table {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 0.1rem;
  padding: 0.15rem;
  box-sizing: border-box;
  li {
    display: flex;
    line-height: 0.35rem;
    span {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:nth-child(1) {
        width: 1rem;
      }
      &:nth-child(2) {
        width: 1rem;
      }
      &:nth-child(3) {
        flex: 1;
      }
      &:nth-child(4) {
        width: 0.6rem;
      }
    }
    &:nth-child(even) {
      // background: #224853;
    }
    &:nth-child(odd) {
      // background: #112530;
    }
  }
  :nth-child(1) span {
    // background: #999;
  }
}
.banshitongji {
  li {
    span {
      flex: 1;
    }
    &:nth-child(even) {
      background: #224853;
    }
    &:nth-child(odd) {
      background: #112530;
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
.list-jindu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0.15rem;
    li {
      display: flex;
      align-items: center;
    }
    strong {
      display: inline-block;
      width: 2rem;
      height: 0.08rem;
      line-height: 0.16rem;
      background: #00d8ff;
      margin-right: 0.1rem;
    }
  }
</style>