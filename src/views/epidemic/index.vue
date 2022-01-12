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
        <div class="conter-detail dangjianchengguo">
          <div id="myChart4"></div>
          <ul>
            <li><span>党建成果报道</span><strong>777</strong><i>96%</i></li>
            <li><span>党建成果报道</span><strong>777</strong><i>96%</i></li>
            <li><span>党建成果报道</span><strong>777</strong><i>96%</i></li>
            <li><span>党建成果报道</span><strong>777</strong><i>96%</i></li>
            <li><span>党建成果报道</span><strong>777</strong><i>96%</i></li>
            <li><span>党建成果报道</span><strong>777</strong><i>96%</i></li>
            <li><span>党建成果报道</span><strong>777</strong><i>96%</i></li>
          </ul>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>统计信息</span></div>
        <div class="conter-detail shequfuwu">
          <ul>
            <li>
              <span
                ><strong>{{ 321 }}</strong></span
              >
              <span>党务工作</span>
            </li>
            <li>
              <span
                ><strong>{{ 321 }}</strong></span
              >
              <span>党员数量</span>
            </li>
            <li>
              <span><strong>{{ 312 }}</strong></span>
              <span>组织信息</span>
            </li>
            <li>
              <span><strong>{{ 312 }}</strong></span>
              <span>组织生活</span>
            </li>
            <li>
              <span><strong>{{ 312 }}</strong></span>
              <span>党员学习</span>
            </li>
            <li>
              <span><strong>{{ 312 }}</strong></span>
              <span>支部工作</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="epidemic-right">
      <div class="conter-box">
        <div class="conter-title"><span>社区服务开展统计</span></div>
        <div class="conter-detail shequfuwu" style="display:flex">
          <div id="myChart1" style="width:48%;height:2rem"></div>
          <div id="myChart" style="width:50%;height:2rem"></div>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>建党成果</span></div>
        <div class="conter-detail jiandangchengguo">
          <ul>
            <li><span>社区开展学雷锋日免费便民活动</span><span>2021-12-28</span></li>
            <li><span>社区开展学雷锋日免费便民活动</span><span>2021-12-28</span></li>
            <li><span>社区开展学雷锋日免费便民活动</span><span>2021-12-28</span></li>
          </ul>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>党课学习趋势</span></div>
        <div class="conter-detail shequfuwu">
          <div id="myChart3" style="width:100%;height:2rem"></div>
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
        data: ["本科", "博士", "研究生", "其他"],
      },
      yAxis: {
        type: "value",
      },

      series: [
        {
          data: [120, 200, 150, 80,],
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
        orient: "vertical",
        left: "5%",
        top: "center",
        align: "left",
        itemWidth: 12,
        itemHeight: 8,
        textStyle: {
          color: "#fff",
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "60%"],
          center: ["60%", "50%"],
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
            { value: 1048, name: "18-28" },
            { value: 735, name: "28-45" },
            { value: 580, name: "45-60" },
            { value: 484, name: "60以上" },
          ],
        },
      ],
    };
    var myChart1 = echarts.init(document.getElementById("myChart"));
    myChart1.setOption(option2);
    let option3 = {
      xAxis: {
        type: 'category',
        data: ['8月6号', '8月7号', '8月8号', '8月9号', '8月10号', '8月11号', '8月12号']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [12, 32, 43, 43, 56, 78, 99],
          type: 'line'
        }
      ]
    };
    var myChart3 = echarts.init(document.getElementById("myChart3"));
    myChart3.setOption(option3);

    let option4 = {
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '党建活动', max: 231 },
          { name: '成果汇报', max: 3213 },
          { name: '学习讨论', max: 321 },
          { name: '党员风采', max: 321 },
          { name: '经验交流', max: 321 },
          { name: '党课学习', max: 321 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [

            {
              value: [123, 321, 234, 43, 321, 321],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    };
    var myChart4 = echarts.init(document.getElementById("myChart4"));
    myChart4.setOption(option4);
  },
};
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
.dangjianchengguo {
  display: flex;
  width: 100%;
  #myChart4 {
    width: 2rem;
    height: auto;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      width: 4rem;
      display: flex;
      justify-content: space-between;
      line-height: 0.3rem;
      strong {
        color: #65beff;
      }
      i {
        color: #00fe90;
      }
    }
  }
}
.jiandangchengguo {
  ul {
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      justify-content: space-between;
      line-height: 0.4rem;
      border-bottom: 1px dashed  #6FE9FF;;
    }
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
  background: #071726bd;
  padding: 0.12rem;
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