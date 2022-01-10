<template>
  <div class="person-room">
    <div class="person-left">
      <div class="conter-box renkouqinkuan">
        <div class="conter-title"><span>人口概况</span></div>
        <div class="conter-detail">
          <ul>
            <li>
              <span>社区总人口</span>
              <span
                ><strong>{{ 324 }}</strong></span
              >
            </li>
            <li>
              <span>户籍人口</span>
              <span
                ><strong>{{ 43243 }}</strong></span
              >
            </li>
            <li>
              <span>活动人口</span>
              <span
                ><strong>{{ 432 }}</strong></span
              >
            </li>
            <li>
              <span>外籍人口</span>
              <span
                ><strong>{{ 432 }}</strong></span
              >
            </li>
          </ul>

          <div class="special">
            <p>特殊人群</p>
            <ul>
              <li>
                <span>高龄老人</span>
                <span
                  ><strong>{{ 13 }}</strong></span
                >
              </li>
              <li>
                <span>空槽老人</span>
                <span
                  ><strong>{{ 32 }}</strong></span
                >
              </li>
              <li>
                <span>残疾人</span>
                <span
                  ><strong>{{ 43 }}</strong></span
                >
              </li>
              <li>
                <span>退伍军人</span>
                <span
                  ><strong>{{ 45 }}</strong></span
                >
              </li>
              <li>
                <span>特殊人员</span>
                <span
                  ><strong>{{ 54 }}</strong></span
                >
              </li>
              <li>
                <span>保障人员</span>
                <span
                  ><strong>{{ 32 }}</strong></span
                >
              </li>
            </ul>
          </div>
          <div class="other-person">
            <div class="party">
              <p>党员及自愿者</p>
              <ul>
                <li>
                  <span>中共党员</span>
                  <span
                    ><strong>{{ 3 }}</strong></span
                  >
                </li>
                <li>
                  <span>志愿者</span>
                  <span
                    ><strong>{{ 3 }}</strong></span
                  >
                </li>
              </ul>
            </div>
            <div class="children">
              <p>儿童</p>
              <ul>
                <li>
                  <span>学期儿童</span>
                  <span
                    ><strong>{{ 43 }}</strong></span
                  >
                </li>
                <li>
                  <span>入园儿童</span>
                  <span
                    ><strong>{{ 56 }}</strong></span
                  >
                </li>
                <li>
                  <span>入园学生</span>
                  <span
                    ><strong>{{ 75 }}</strong></span
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
            <span>空槽老人</span>
            <span>访客信息</span>
            <span>合租房</span>
          </p>
          <ul class="ul-table">
            <li>
              <span></span>
              <span>姓名</span>
              <span>居住地址</span>
              <span>未出门天数</span>
            </li>
            <li>
              <span>1</span>
              <span>张三</span>
              <span>北京</span>
              <span>2</span>
            </li>
            <li>
              <span>1</span>
              <span>李四</span>
              <span>北京</span>
              <span>2</span>
            </li>
            <li>
              <span>1</span>
              <span>王五</span>
              <span>北京</span>
              <span>2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="person-content" >
      <div class="conter-box">
        <div class="conter-title"><span>社区人员进出统计</span></div>
        <div class="conter-detail shequjinchu">
          <div class="shequjinchu-left">
            <span>
              <strong>本月累计访问数</strong>
              <i>12</i>
            </span>
            <span>
              <strong>今日访问客数</strong>
              <i>121</i>
            </span>
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
              <li>
                <span>1</span>
                <span>223</span>
                <span>好景国际2栋3号</span>
                <span>12</span>
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
            <li>
              <span>社区数量</span>
              <span><strong>{{ 2 }}</strong></span>
            </li>
            <li>
              <span>住宅栋数</span>
              <span><strong>{{ 2 }}</strong></span>
            </li>
            <li>
              <span>住户数量</span>
              <span><strong>{{ 2 }}</strong></span>
            </li>
            <li>
              <span>出租数量</span>
              <span><strong>{{ 2 }}</strong></span>
            </li>
            <li>
              <span>房屋数量</span>
              <span><strong>{{ 2 }}</strong></span>
            </li>
            <li>
              <span>公租房</span>
              <span><strong>{{ 2 }}</strong></span>
            </li>
            <li>
              <span>商住两用房</span>
              <span><strong>{{ 2 }}</strong></span>
            </li>
             <li>
              <span>今日访问客数</span>
              <span><strong>{{ 2 }}</strong></span>
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
.person-room {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  .person-left {
    display: flex;
    flex-direction: column;
    width: 5rem;
  }
  .person-content {
    position: absolute;
    left: 5.8rem;
    bottom: 0.5rem;
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
    }
    .children {
      width: 60%;
    }
  }
}
.shequgailan {
  ul {
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
      width: 0.6rem;
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
      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
</style>