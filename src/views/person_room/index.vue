<template>
  <div class="person-room">
    <div class="person-left">
      <div class="conter-box renkouqinkuan">
        <div class="conter-title"><span>人口概况</span></div>
        <div class="conter-detail">
          <ul>
            <li v-for="(item,index) in communityAll" :key="index">
              <span>{{ item.name }}</span>
              <span><strong>{{ item.value }}</strong></span>
            </li>
          </ul>

          <div class="special">
            <p class="teshurenqun">特殊人群</p>
            <ul>
              <li v-for="(item, index) in specialCrowd" :key="index">
                <span>{{ item.name }}</span>
                <span><strong>{{ item.value }}</strong></span>
              </li>
            </ul>
          </div>
          <div class="other-person">
            <div class="party">
              <p class="danyuanzhiyuanzhe">党员及自愿者</p>
              <ul>
                <li>
                  <span>中共党员</span>
                  <span><strong>{{ 3 }}</strong></span>
                </li>
                <li>
                  <span>志愿者</span>
                  <span><strong>{{ 3 }}</strong></span
                  >
                </li>
              </ul>
            </div>
            <div class="children">
              <p class="ertong">儿童</p>
              <ul>
                <li>
                  <span>学期儿童</span>
                  <span><strong>{{ 43 }}</strong></span>
                </li>
                <li>
                  <span>入园儿童</span>
                  <span><strong>{{ 56 }}</strong></span>
                </li>
                <li>
                  <span>入园学生</span>
                  <span><strong>{{ 75 }}</strong></span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="conter-box yujingtixing" style="margin-top: 0.3rem">
        <div class="conter-title"><span>预警提醒</span></div>
        <div class="conter-detail">
          <p>
            <span>空巢老人</span>
            <span>访客信息</span>
            <span>合租房</span>
          </p>
          <div class="bo-table" style="padding: 0 10px">
            <el-row type="flex" justify="space-between">
              <el-col :span="2">&nbsp;</el-col>
              <el-col :span="6">姓名</el-col>
              <el-col :span="6">居住地址</el-col>
              <el-col :span="6">未出门天数</el-col>
            </el-row>
            <el-row type="flex" v-for="(item, index) in WarningRemind" :key="index"  justify="space-between">
              <el-col :span="2">{{ index+1 }}</el-col>
              <el-col :span="6">{{ item.name }}</el-col>
              <el-col :span="6">{{ item.address }}</el-col>
              <el-col :span="6">{{ item.outNum }}</el-col>
            </el-row>
          </div>
          <!-- <ul class="ul-table">
            <li>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li v-for="(item, index) in WarningRemind" >
              <span>{{ index }}</span>
              <span>{{ item.name }}</span>
              <span>{{ item.address }}</span>
              <span>{{ item.outNum }}</span>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
    <div class="person-content" >
      <div class="conter-box">
        <div class="conter-title"><span>社区人员进出统计</span></div>
        <div class="conter-detail shequjinchu">
          <div class="shequjinchu-left">
            <p>
              <img src="../../assets/person/ren_icon.png"/>
              <span>
                <strong>本月累计访问数</strong>
                <i>12</i>
              </span>
            </p>
            <p>
              <img src="../../assets/person/ren_icon.png"/>
              <span>
                <strong>今日访问客数</strong>
                <i>123</i>
              </span>
            </p>
          </div>
          <div class="shequjinchu-right">
            <p>访客排名</p>
            <ul class="ul-table-jingchu">
              <li>
                <span>排名</span>
                <span>房间号</span>
                <span>房屋地址</span>
                <span>访客次数</span>
              </li>
              <li v-for="(item, index) in visitorRanking" :key="index">
                <span>{{ index }}</span>
                <span>{{ item.roomNo }}</span>
                <span>{{ item.roomAddress }}</span>
                <span>{{ item.time }}</span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="person-right">

      <div class="conter-box renkouqinkuan shequgailan">
        <div class="conter-title"><span>社区房屋概览</span></div>
        <div class="conter-detail">
          <ul >
            <li v-for="(item, index) in houseOverview" :key="index">
              <span>{{ item.name }}</span>
              <span><strong>{{ item.value }}</strong></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="conter-box">
        <div class="conter-title"><span>住宅状态信息</span></div>
        <div class="conter-detail zhuzaizhuantai">
          <div class="zhuzaizhuantai-top">
            <el-select v-model="form.value" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>

            <el-select v-model="form.value1" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>

            <el-select v-model="form.value2" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>

            <el-select v-model="form.value3" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          
          </div>
          <div class="zhuzaizhuantai-content">
            <ul>
              <li v-for="(index) in 20" :key="index">{{ index }}</li>
            </ul>
          </div>
          <div class="zhuzaizhuantai-bottom">
            <div class="fanwudetail">
              <p>房屋详情</p>
              <ul class="zhuzaizhuantai-after">
                <li><span>房屋地址</span><strong>好景国际</strong></li>
                <li><span>住户姓名</span><strong>张某（女）</strong></li>
                <li><span>房屋属性</span><strong>自住</strong></li>
                <li><span>联系电话</span><strong>15611223344</strong></li>
              </ul>
            </div>
            <div class="zhuzaizhuantai-echart">
              <p>住宅状态占比</p>
              <div style="width:100%;height:100%" id="age"></div>
            </div>
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
    return {
      form: {
        value: '',
        value1: '',
        value2: '',
        value3: ''
      },
      options1: [
        { name: '1', value: '1' }
      ],
      communityAll: [ { name: '社区总人口', value: '12' },{ name: '户籍人口', value: '12' }, { name: '活动人口', value: '12' },{ name: '外籍人口', value: '12' }  ],
      specialCrowd: [ { name: '高龄老人', value: '12' }, { name: '空槽老人', value: '12' }, { name: '残疾人', value: '12' },{ name: '退伍军人', value: '12' }, { name: '特殊人员', value: '12' },{ name: '保障人员', value: '12' } ],
      WarningRemind: [ { name: '张三', address: '北京', outNum: 2},{ name: '张三', address: '北京', outNum: 2},{ name: '张三', address: '北京', outNum: 2},{ name: '张三', address: '北京', outNum: 2}, { name: '张三', address: '北京', outNum: 2}, { name: '张三', address: '北京', outNum: 2} ],
      myChartAge: null,
      agetext: '',
      agesubtext: '',
      special_group: [],
      age_distribution: [{ name: '装修', value: 23 }, { name: '空量', value: 23 },{ name: '自住', value: 23 },{ name: '出租', value: 23 }, {  }],
      visitorRanking:[ { roomNo: '1202', roomAddress: '好景国际3栋513室', time: 3 }, { roomNo: '1202', roomAddress: '好景国际3栋513室', time: 3 },{ roomNo: '1202', roomAddress: '好景国际3栋513室', time: 3 } ],
      houseOverview: [ { name: '社区数量', value: 23 },{ name: '住宅栋数', value: 23 }, { name: '住户数量', value: 23 },{ name: '出租数量', value: 23 },{ name: '房屋数量', value: 23 },{ name: '公租房', value: 23 },{ name: '商住两用房', value: 23 }, { name: '今日访问客数', value: 23 } ],

      houseRoom: [ { address: '1', zxhs: 1, floor: 10, roomNo: '10', type: 1 } ]
    };
  },
  computed: {
    ageOption() {
      let that = this;
      return {
        color: ["#009122", "#00ff90", "#f3b834", "#48c7ff"],
        title: {
          text: that.agetext,
          subtext: that.agesubtext,
          textAlign: "center",
          x: "58%",
          y: "35%",
          textStyle: {
            color: "#fff",
            fontSize: 10,
            fontWeight: "bolder",
          },
          subtextStyle: {
            color: "#00fb8e",
            fontSize: 10,
            fontWeight: "bolder",
          },
        },
        legend: {
          orient: "vertical",
          left: "10%",
          top: "center",
          align: "left",
          itemWidth: 12,
          itemHeight: 8,
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: 0,
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["45%", "60%"],
            center: ["60%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "10",
              },
            },
            labelLine: {
              show: false,
            },
            data: that.age_distribution
          },
        ],
      };

    },
  },
  mounted() {
    let that = this
    this.myChartAge = echarts.init(document.getElementById("age"));
    that.agetext = this.age_distribution[0].name
    that.agesubtext = this.age_distribution[0].value
    this.myChartAge.setOption(that.ageOption);
    this.myChartAge.off("click");
    this.myChartAge.on("click", function (params) {
      that.agetext = params.name;
      that.agesubtext = params.value;
      that.myChartAge.setOption(that.ageOption);
    });
  }
};
</script>

<style lang="scss" scoped>
@import url('../../style/public.scss');
.person-room {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0.5rem 0;
  box-sizing: border-box;
  .person-left {
    display: flex;
    flex-direction: column;
    width: 5rem;
  }
  .person-content {
    position: absolute;
    left: 50%;
    margin-left: -3.5rem;
    bottom: 0rem;
    width: 7rem;
  }
  .person-right {
    display: flex;
    flex-direction: column;
    width: 5rem;
  }
}
.person-room {
  color: #fff;
  z-index: 10000;
}
.teshurenqun {
  position: relative;
  font-size: 0.2rem;
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
.danyuanzhiyuanzhe {
  position: relative;
  font-size: 0.2rem;
  margin: 0.2rem 0;
  &::after {
    content: '';
    position: absolute;
    width: 0.2rem;
    height: 3px;
    left: 0;
    top: 0.1rem;
    background: url('../../assets/person/xiao_title.png') no-repeat;
  }
  &::before {
    content: '';
    position: absolute;
    width: 0.2rem;
    height: 3px;
    right: 0;
    top: 0.1rem;
    transform: rotate(180deg);
    background: url('../../assets/person/xiao_title.png') no-repeat;
  }
}
.ertong {
  position: relative;
  font-size: 0.2rem;
  margin: 0.2rem 0;
  &::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 3px;
    left: 0.1rem;
    top: 0.1rem;
    background: url('../../assets/person/xiao_title.png') no-repeat;
  }
  &::before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 3px;
    right: 0;
    top: 0.1rem;
    transform: rotate(180deg);
    background: url('../../assets/person/xiao_title.png') no-repeat;
  }
}
.renkouqinkuan {
  display: flex;
  flex-direction: column;
  ul {
    min-height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
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
  .special {
    width: 100%;
    p {
      text-align: center;
    }
    ul {
      li {
        span {
          font-size: 0.14rem;
          font-weight: 500;
          strong {
            color: #6fe9ff;
            font-size: 0.3rem;
          }
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
      width: 40%;
      span {
        font-size: 0.16rem;
      }
    }
    .children {
      width: 60%;
      span {
        font-size: 0.16rem;
      }
    }
  }
}
.shequgailan {
  margin-bottom: 0.1rem;
  display: flex;
  ul {
    height: 2.5rem;
    flex-wrap: wrap;
    li {
      width: 25%;
      margin: 0.15rem 0;
    }
  }
}
.yujingtixing {
  p {
    display: flex;
    span {
      display: inline-block;
      width: 0.8rem;
      height: 0.25rem;
      text-align: center;
      line-height: 0.25rem;
      background: url("../../assets/person/bar_btn_active.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 0.1rem;
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
          width: 0.4rem;
        }
        &:nth-child(2) {
          width: 0.6rem;
        }
        &:nth-child(3) {
          flex: 1;
        }
        &:nth-child(4) {
          width: 0.6rem;
        }
      }
      &:nth-child(even) span{
        background: #224853;
      }
      &:nth-child(odd) span{
        background: #112530;
      }
    }
    :nth-child(1) span {
      background: rgba(73, 75, 75, 0.55);
    }
  }
}
.shequjinchu {
    display: flex;
    height: 1.8rem;
    box-sizing: border-box;
    padding: 0.15rem;
    .shequjinchu-left {
      display: flex;
      flex-direction: column;
      width: 2rem;
      justify-content: space-between;
      p {
        display: flex;
        
        img {
          width: 0.5rem;
          height: 0.5rem;
        }
        span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 0.15rem;
          color: #00fe90;
          font-size: 0.25rem;
          strong {
            color: #fff;
            font-size: 0.16rem;
          }
          i {
            font-size: 0.25rem;
            font-style: normal;
          }
        }
      }
      
    }
    .shequjinchu-right {
      margin-left: 0.15rem;
      display: flex;
      flex: 1;
      flex-direction: column;
      .ul-table-jingchu {
        display: flex;
        width: 100%;
        flex-direction: column;
        li {
          display: flex;
          width: 100%;
          line-height: 0.3rem;
          span {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
            &:nth-child(1) {
              width: 0.4rem;
            }
            &:nth-child(2) {
              width: 0.8rem;
            }
            &:nth-child(3) {
              flex: 1;
            }
            &:nth-child(4) {
              width: 0.8rem;
            }
          }
        }
      }
    }
  }

  .zhuzaizhuantai {
  display: flex;
  flex-direction: column;
  width: 100%;
  .zhuzaizhuantai-content {
    width: 100%;
    margin-top: 0.15rem;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.7rem;
        height: 0.3rem;
        margin: 0 0.1rem;
        line-height: 0.4rem;
        margin-bottom: 0.05rem;
        background: #000;
      }
    }
  }
  .zhuzaizhuantai-bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0.15rem 0.15rem 0 0.15rem;
    position: relative;
    box-sizing: border-box;
    .zhuzaizhuantai-after {
      border: 1px solid #fff;
      border-radius: 0.03rem;
      padding: 0.1rem 0;
    }
    .zhuzaizhuantai-after::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      left: 0;
      top: 0;
      background: #fff;
    }
    .fanwudetail {
      position: relative;
      width: 50%;
      ul {
        padding-left: 0.15rem;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        margin-top: 0.15rem;
        li {
          display: flex;
          span {
            display: inline-block;
            width: 1rem;
            font-size: 0.15rem;
            color: #65beff;
          }
          strong {
            font-size: 0.16rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  .zhuzaizhuantai-echart {
    width: 50%;
    height: 1.5rem;
  }
}
/deep/.el-select {
  width: 1rem;
  margin-left: 0.1rem;
}
/deep/.el-input--suffix .el-input__inner {
  background: transparent;
}
/deep/.el-popper {
  z-index: 10000;
}
.conter-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #071726bd;
  padding: 0.12rem;
  border-radius: 0.05rem;
  box-sizing: border-box;
  margin-bottom: 0.1rem;
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