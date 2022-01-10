<template>
  <div class="community">
    <div class="community-left">
      <div class="conter-box ">
        <div class="conter-title"><span>社区服务开展统计</span></div>
        <div class="conter-detail shequfuwu">
          <ul>
            <li>
              <span>未成年人</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>综合活动</span>
              <span
                ><strong>{{ 321 }}</strong></span
              >
            </li>
            <li>
              <span>家长学校</span>
              <span><strong>{{ 312 }}</strong></span>
            </li>
            <li>
              <span>道德讲堂</span>
              <span><strong>{{ 312 }}</strong></span>
            </li>
            <li>
              <span>主题活动</span>
              <span><strong>{{ 432 }}</strong></span>
            </li>
            <li>
              <span>文明礼仪</span>
              <span><strong>{{ 132 }}</strong></span>
            </li>
            <li>
              <span>志愿服务</span>
              <span><strong>{{ 32 }}</strong></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="conter-box yujingtixing">
        <div class="conter-title"><span>体温监测记录</span></div>
        <div class="conter-detail">
          <ul class="ul-table">
            <li>
              <span></span>
              <span>活动名称</span>
              <span>活动地点</span>
              <span>活动时间</span>
            </li>
            <li>
              <span>1</span>
              <span>写春联送祝福</span>
              <span>社区活动室</span>
              <span>2022-01-30</span>
            </li>
            <li>
              <span>2</span>
              <span>写春联送祝福</span>
              <span>社区活动室</span>
              <span>2022-01-30</span>
            </li>
            <li>
              <span>3</span>
              <span>写春联送祝福</span>
              <span>社区活动室</span>
              <span>2022-01-30</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="conter-box newhuodonglist">
        <div class="conter-title"><span>最新活动列表</span></div>
        <div class="conter-detail">
          <ul>
            <li>
             <img src=""/>
             <span>社区开展学雷锋日</span>
             <span>社区活动</span>
            </li>
            
             <li>
             <img src=""/>
             <span>社区开展学雷锋日</span>
             <span>社区活动</span>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div class="community-right">
      <div class="conter-box">
        <div class="conter-title"><span>日常走访统计</span></div>
        <div class="conter-detail 135">
          <p>展小城大爱 现社区温情</p>
          <ul class="ul-table">
            <li>
              <span>姓名</span>
              <span>计划走访次数</span>
              <span>完成进度</span>
              <span>已完成走访次数</span>
            </li>
            <li>
              <span>张**</span>
              <span>234</span>
              <span>
                <ul class="list-jindu">
                  <li> <strong></strong></li>
                </ul>
              </span>
              <span>34</span>
            </li>
            <li>
              <span>张**</span>
              <span>234</span>
              <span>
                <ul class="list-jindu">
                  <li> <strong></strong></li>
                </ul>
              </span>
              <span>34</span>
            </li>
            <li>
              <span>张**</span>
              <span>234</span>
              <span>
                <ul class="list-jindu">
                  <li> <strong></strong></li>
                </ul>
              </span>
              <span>34</span>
            </li>
            <li>
              <span>张**</span>
              <span>234</span>
              <span>
                <ul class="list-jindu">
                  <li> <strong></strong></li>
                </ul>
              </span>
              <span>34</span>
            </li>
            <li>
              <span>张**</span>
              <span>234</span>
              <span>
                <ul class="list-jindu">
                  <li> <strong></strong></li>
                </ul>
              </span>
              <span>34</span>
            </li>
            
          </ul>

        </div>
      </div>

      <div class="conter-box ">
        <div class="conter-title"><span>就业创业服务统计</span></div>
        <div class="conter-detail shequfuwu jiuyechuangye">
          <ul>
            <li>
              <span>职业技能培训</span>
              <span><strong>{{ 312 }}</strong></span>
            </li>
            <li>
              <span>创新创业指导</span>
              <span><strong>{{ 432 }}</strong></span>
            </li>
            <li>
              <span>招聘信息发布</span>
              <span><strong>{{ 132 }}</strong></span>
            </li>
            <li>
              <span>求职就业援助</span>
              <span><strong>{{ 32 }}</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.community {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  .community-left {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
  .community-right {
    display: flex;
    flex-direction: column;
    width: 6rem;
  }
  .shequfuwu {
    ul {
      min-height: 1.2rem;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      padding: 0 0.3rem;
      box-sizing: border-box;
      flex-wrap: wrap;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 25%;
        margin: 0.15rem 0;
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
}

.newhuodonglist {
  ul {
    display: flex;
    flex-direction: column;
    li {
      // height: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0.15rem;
      img {
        width: 0.65rem;
        height: 0.65rem;
      }
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
      text-align: center;
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
.jiuyechuangye {
  ul {
    li {
      width: 50% !important;
    }
  }
}
</style>