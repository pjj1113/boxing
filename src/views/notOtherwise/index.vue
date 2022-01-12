<template>
  <div class="notOtherwise">
    <div class="notOtherwise-left">
      <div class="conter-box">
        <div class="conter-title"><span>12345热线</span></div>
        <div class="conter-detail">
          <ul class="rexian">
            <li>
              <img src="../../assets/not/xiangying.png"/>
              <div>
                <span>响应率</span>
                <strong>100%</strong>
              </div>
            </li>
            <li>
              <img src="../../assets/not/jiejue.png"/>
              <div>
                <span>解决率</span>
                <strong>90%</strong>
              </div>
            </li>
            <li>
              <img src="../../assets/not/xiangying.png"/>
              <div>
                <span>满意度</span>
                <strong>100%</strong>
              </div>
            </li>
          </ul>

          <p class="rexianfenbutitle">热线类别分布</p>

          <div style="width: 100%; height: 3rem" id="myChart"></div>
          <p class="rexianfenbutitle">热线社区分布</p>
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
          <p class="rexianfenbutitle">总办理工单</p>
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
          
          <p class="rexianfenbutitle">办理质量情况</p>
          <div class="zhiliangqingkuan">
            <ul>
              <li>
                <span>办结率</span>
                <div>
                  <el-progress type="circle" :color="'#00D8FF'" :percentage="90"></el-progress>
                </div>
              </li>
              <li>
                <span>重办率</span>
                <el-progress type="circle" :color="'#FFCD5C'" :percentage="25"></el-progress>
              </li>
              <li>
                <span>满意率</span>
                <el-progress type="circle" :color="'#00D8FF'" :percentage="90"></el-progress>
              </li>
              <li>
                <span>逾期率</span>
                <el-progress type="circle" :color="'#F24466'" :percentage="25"></el-progress>
              </li>
            </ul>
            
          </div>

          <p class="rexianfenbutitle">工单分类统计</p>
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

          <p class="rexianfenbutitle">社区办事统计</p>
          <div class="bo-table" style="padding: 0 10px">
            <el-row type="flex" justify="space-between">
              <el-col :span="5">接收时间</el-col>
              <el-col :span="5">投诉人</el-col>
              <el-col :span="5">办理</el-col>
              <el-col :span="4">姓名</el-col>
              <el-col :span="5">居住地址</el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :span="5">2022-01-01</el-col>
              <el-col :span="5">李**</el-col>
              <el-col :span="5"></el-col>
              <el-col :span="4">张**</el-col>
              <el-col :span="5">好景国际</el-col>
            </el-row>
             <el-row type="flex" justify="space-between">
              <el-col :span="5">2022-01-01</el-col>
              <el-col :span="5">李**</el-col>
              <el-col :span="5"></el-col>
              <el-col :span="4">张**</el-col>
              <el-col :span="5">好景国际</el-col>
            </el-row>
             <el-row type="flex" justify="space-between">
              <el-col :span="5">2022-01-01</el-col>
              <el-col :span="5">李**</el-col>
              <el-col :span="5"></el-col>
              <el-col :span="4">张**</el-col>
              <el-col :span="5">好景国际</el-col>
            </el-row>
          </div>

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
            { value: 1048, name: "民生保障" },
            { value: 735, name: "社会稳定" },
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
.rexian {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  box-sizing: border-box;
  li {
    display: flex;
    img {
      width: 0.7rem;
      height: 0.7rem;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-left: 0.1rem;
      justify-content: center;
      align-items: center;
      span {
        font-size: 0.16rem;
      }
      strong {
        font-size: 0.22rem;
        color: rgba(0, 254, 144, 1);
      }
    }
  }
}
.rexianfenbutitle {
  position: relative;
  font-size: 0.2rem;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    width: 1.8rem;
    height: 3px;
    left: 0;
    top: 0.1rem;
    background: url('../../assets/person/xiao_title.png') no-repeat;
  }
  &::before {
    content: '';
    position: absolute;
    width: 1.8rem;
    height: 3px;
    right: 0;
    top: 0.1rem;
    transform: rotate(180deg);
    background: url('../../assets/person/xiao_title.png') no-repeat;
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
        font-size: 0.3rem;
        font-weight: 400;
      }
    }
  }
}
.zhiliangqingkuan {
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 24%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.1rem 0;
      span {
        font-size: 0.2rem;
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
    line-height: 0.25rem;
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
  background: #071726bd;
  padding: 0.12rem;
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
/deep/.el-progress__text {
  color: #02E58D;
  font-size: 0.3rem !important;
}
</style>