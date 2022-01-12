<template>
  <div class="trip">
    <div class="trip-left">
      <div class="conter-box jinriyiqing">
        <div class="conter-title"><span>今日疫情防控</span></div>
        <div class="conter-detail" style="height: 1.8rem">
          <ul>
            <li>
              <span>体温监测总数</span>
              <span
                ><strong>{{ 2 }}</strong></span
              >
            </li>
            <li>
              <span>正常</span>
              <span
                ><strong>{{ 2 }}</strong></span
              >
            </li>
            <li>
              <span>异常</span>
              <span
                ><strong>{{ 2 }}</strong></span
              >
            </li>
            <li>
              <span>健康数据填报</span>
              <span
                ><strong>{{ 2 }}</strong></span
              >
            </li>
            <li>
              <span>正常</span>
              <span
                ><strong>{{ 2 }}</strong></span
              >
            </li>
            <li>
              <span>异常</span>
              <span
                ><strong>{{ 2 }}</strong></span
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="conter-box yujingtixing">
        <div class="conter-title"><span>体温监测记录</span></div>
        <div class="conter-detail">
          <ul class="ul-table">
            <li>
              <span>监测时间</span>
              <span>监测位置</span>
              <span>监测温度</span>
              <span>姓名</span>
              <span>居住地址</span>
            </li>
            <li>
              <span>20：23：12</span>
              <span>好景-南门-进</span>
              <span>36.5℃</span>
              <span>张三</span>
              <span>好景国际2栋3号</span>
            </li>
            <li>
              <span>20：23：12</span>
              <span>好景-南门-进</span>
              <span>36.5℃</span>
              <span>张三</span>
              <span>好景国际2栋3号</span>
            </li>
            <li>
              <span>20：23：12</span>
              <span>好景-南门-进</span>
              <span>36.5℃</span>
              <span>张三</span>
              <span>好景国际2栋3号</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="conter-box jinriyiqing">
        <div class="conter-title"><span>体温监测记录</span></div>
        <div class="conter-detail" style="height: 2rem">
          <div style="width: 100%;height: 100%;" id="myChart"></div>
        </div>
      </div>
    </div>
    <div class="trip-content">
      <div class="conter-box yujingtixing">
        <div class="conter-title"><span>商业体停车实况</span></div>
        <div class="conter-detail" >
          <div class="tincheshikuan">
            <span class="shangye">商业1区</span>
            <span>
              <b>车位总数</b>
              <strong>1234</strong>
            </span>
            <span>
              <b>空闲车位数</b>
              <strong>333</strong>
            </span>
            <div class="kongxianlv">
              <p><span>空闲率</span><strong>12</strong></p>
              <div></div>
            </div>
          </div>
          <div class="tincheshikuan">
            <span class="shangye">商业1区</span>
            <span>
              <b>车位总数</b>
              <strong>1234</strong>
            </span>
            <span>
              <b>空闲车位数</b>
              <strong>333</strong>
            </span>
            <div class="kongxianlv">
              <p><span>空闲率</span><strong>12</strong></p>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="conter-box yujingtixing">
        <div class="conter-title"><span>停车预警提醒</span></div>
        <div class="conter-detail">
          <ul class="ul-table">
            <li>
              <span></span>
              <span>车牌号码</span>
              <span>位置</span>
              <span>停留时间</span>
            </li>
            <li>
              <span>1</span>
              <span>京N1243</span>
              <span>小区西</span>
              <span>停留时间</span>
            </li>
            <li>
              <span>2</span>
              <span>京N1243</span>
              <span>小区西</span>
              <span>停留时间</span>
            </li>
            <li>
              <span>3</span>
              <span>京N1243</span>
              <span>小区西</span>
              <span>停留时间</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="conter-box yujingtixing">
        <div class="conter-title"><span>车辆进出分析</span></div>
        <div class="conter-detail" style="height: 2rem">
        </div>
      </div>
    </div>
    <div class="trip-right">
      <div class="conter-box yujingtixing">
        <div class="conter-title"><span>电动自行车充电监测记录</span></div>
        <div class="conter-detail">
          <ul class="ul-table">
            <li>
              <span></span>
              <span>地址</span>
              <span>状态</span>
              <span></span>
              <span>详情</span>
              <span></span>
            </li>
            <li>
              <span>1</span>
              <span>好景国际二期 地下车棚</span>
              <span>在线</span>
              <span>电压</span>
              <span>23V</span>
              <span>190V</span>
            </li>
            <li>
              <span>2</span>
              <span>好景国际二期 地下车棚</span>
              <span>在线</span>
              <span>电压</span>
              <span>23V</span>
              <span>190V</span>
            </li>
            <li>
              <span>3</span>
              <span>好景国际二期 地下车棚</span>
              <span>在线</span>
              <span>电压</span>
              <span>23V</span>
              <span>190V</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="conter-box yujingtixing">
        <div class="conter-title"><span>电动自行车充电异常报警</span></div>
        <div class="conter-detail">
          <ul class="ul-table">
            <li>
              <span></span>
              <span>报警站点</span>
              <span>报警类型</span>
              <span>报警时间</span>
              <span>报警状态</span>
            </li>
            <li>
              <span>1</span>
              <span>好景国际二期 地下车棚</span>
              <span>掉电报警</span>
              <span>2022-1-1</span>
              <span>已处理</span>
            </li>
            <li>
              <span>2</span>
              <span>好景国际二期 地下车棚</span>
              <span>掉电报警</span>
              <span>2022-1-1</span>
              <span>已处理</span>
            </li>
            <li>
              <span>3</span>
              <span>好景国际二期 地下车棚</span>
              <span>掉电报警</span>
              <span>2022-1-1</span>
              <span>已处理</span>
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
    return {

    }
  },
  mounted() {
    let option = {
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };
    var myChart = echarts.init(document.getElementById("myChart"));
    myChart.setOption(option);
  }
};
</script>

<style lang="scss">
.trip {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  .trip-left {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
  .trip-content {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
  .trip-right {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
}
.jinriyiqing {
  display: flex;
  flex-direction: column;
  ul {
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
}

.tincheshikuan{
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  .shangye {
    font-size: 0.25rem;
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    b {
      font-size: 0.18rem;
      font-weight: 400;
    }
    strong {
      font-size: 0.3rem;
      color: #00fe90;
    }
  }
  .kongxianlv {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 2rem;
    p {
      width: 100%;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.18rem;
      }
      strong {
        font-size: 0.25rem;
        color: #00fe90;
      }
    }
    div {
      width: 2rem;
      height: 0.04rem;
      background: #65beff;
    }
  }
}

.yujingtixing {
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
        padding: 0 0.04rem;

        &:nth-child(1) {
         flex: 1;
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
        background: #22485391;
      }
      &:nth-child(odd) {
        background: #1125309a;
      }
    }
    :nth-child(1) span {
      background: rgba(153, 153, 153, 0.5);
    }
  }
}

.conter-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #071726bd;
  padding: 0.12rem;
  box-sizing: border-box;
  margin-bottom: 0.15rem;
  border-radius: 0.05rem;
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