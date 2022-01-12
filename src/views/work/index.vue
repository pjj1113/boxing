<template>
  <div class="work">
    <div class="work-left">
      <div class="conter-box renkouqinkuan">
        <div class="conter-title"><span>工作动态概览</span></div>
        <div class="conter-detail">
          <div class="other-person">
            <div class="party">
              <p class="teshurenqun">事项办理</p>
              <ul>
                <li>
                  <span>待受理</span>
                  <span><strong>{{ 3 }}</strong></span>
                </li>
                <li>
                  <span>已受理</span>
                  <span><strong>{{ 3 }}</strong></span>
                </li>
                <li>
                  <span>已完成</span>
                  <span><strong>{{ 3 }}</strong></span>
                </li>
              </ul>
            </div>
            <div class="children">
              <p class="teshurenqun">事件处理</p>
              <ul>
                <li>
                  <span>事件总数</span>
                  <span><strong>{{ 3 }}</strong></span>
                </li>
                <li>
                  <span>处理中</span>
                  <span><strong>{{ 3 }}</strong></span>
                </li>
                <li>
                  <span>未处理</span>
                  <span><strong>{{ 3 }}</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>事件类型占比分析</span></div>
        <div class="conter-detail shijianzhanbi">
          <div class="list">
            <span>政策咨询 48%</span>
            <span>小区管理 26%</span>
            <span>突发事件 33%</span>
            <span>小区建设 33%</span>
            <span>停车管理33%</span>
          </div>
          <div id="myChart" style="height: 2rem; width: 2rem"></div>
          <div class="list">
            <span>住宅维护行政服务 16%</span>
            <span>社会服务 10%</span>
            <span>民生保障 7%</span>
            <span>环境治理 33%</span>
            <span>公共设施 33%</span>
            <span>出租房屋 33%</span>
          </div>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>最新事件排名</span></div>
        <div class="conter-detail">
          <div class="bo-table" style="padding: 0 10px">
            <el-row type="flex" justify="space-between">
              <el-col :span="4">&nbsp;</el-col>
              <el-col :span="5">事件类型</el-col>
              <el-col :span="5">信息数量</el-col>
              <el-col :span="5">办理进度</el-col>
              <el-col :span="5">负责人员</el-col>
            </el-row>
            <el-row v-for="index in 5" :key="index" type="flex" justify="space-between">
              <el-col :span="4">{{ index }}</el-col>
              <el-col :span="5">政策咨询</el-col>
              <el-col :span="5">23</el-col>
              <el-col :span="5">待派发</el-col>
              <el-col :span="5">张**</el-col>
            </el-row>
            
          </div>
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
            <p v-for="i in 5">
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
          name: 'Access From',
          type: 'pie',
          radius: '90%',
          label: {
            normal: {
              position: 'inner',
              show : false
            }
          },
          data: [
            { value: 1048, name: '1' },
            { value: 735, name: '2' },
            { value: 580, name: '3' },
            { value: 484, name: '4' },
            { value: 300, name: '5' },
            { value: 23, name: '6' },
            { value: 32, name: '7' },
            { value: 432, name: '8' },
            { value: 23, name: '9' },
            { value: 78, name: '10' },
          ],
        }
      ]
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
          font-weight: 400;
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
    .teshurenqun {
      position: relative;
      font-size: 0.2rem;
      &::after {
        content: '';
        position: absolute;
        width: 0.8rem;
        height: 3px;
        left: 0.1rem;
        top: 0.1rem;
        background: url('../../assets/person/xiao_title.png') no-repeat;
      }
      &::before {
        content: '';
        position: absolute;
        width: 0.8rem;
        height: 3px;
        right: 0.1rem;
        top: 0.1rem;
        transform: rotate(180deg);
        background: url('../../assets/person/xiao_title.png') no-repeat;
      }
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
      justify-content: space-around;
      align-items: center;
      line-height: 0.4rem;
      span {
        display: inline-block;
        font-size: 0.18rem;
      }
      i {
        display: inline-block;
        width: 3rem;
        height: 0.2rem;
        background: #3dadf9;
      }
      strong {
        color: #02E58D;
        font-size: 0.2rem;
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
  display: flex;
  justify-content: space-around;
  height: 2rem;
  .list {
    display: flex;
    flex-direction: column;
    span {
      line-height: 0.3rem;
      font-size: 0.16rem;
    }
  }
}
.wangluo {
  padding: 0.1rem;
  ul {
    li {
      flex-direction: row;
      justify-content: flex-start;
      width: 50%;
      span {
        font-weight: 400;
        font-size: 0.25rem;
        strong {
          font-size: 0.4rem;
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
    padding: 0.1rem;
    p {
      display: flex;
      justify-items: center;
      align-items: center;
      flex-direction: column;
      width: 19%;
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