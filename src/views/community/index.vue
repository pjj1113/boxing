<template>
  <div class="community">
    <div class="community-left">
      <div class="conter-box ">
        <div class="conter-title"><span>社区服务开展统计</span></div>
        <div class="conter-detail shequfuwu">
          <p class="box-h3-title">活力社区  幸福社区</p>
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
        <div class="conter-title"><span>社区活动计划</span></div>
        <div class="conter-detail">
          <div class="bo-table" style="padding: 0 10px">
            <el-row type="flex" justify="space-between">
              <el-col :span="2">&nbsp;</el-col>
              <el-col :span="6">活动名称</el-col>
              <el-col :span="6">活动地点</el-col>
              <el-col :span="6">活动时间</el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :span="2">1</el-col>
              <el-col :span="6">写春联送祝福</el-col>
              <el-col :span="6">社区活动室</el-col>
              <el-col :span="6">2022-01-30</el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :span="2">1</el-col>
              <el-col :span="6">写春联送祝福</el-col>
              <el-col :span="6">社区活动室</el-col>
              <el-col :span="6">2022-01-30</el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :span="2">1</el-col>
              <el-col :span="6">写春联送祝福</el-col>
              <el-col :span="6">社区活动室</el-col>
              <el-col :span="6">2022-01-30</el-col>
            </el-row>
          </div>
        
        </div>
      </div>

      <div class="conter-box newhuodonglist">
        <div class="conter-title"><span>最新活动列表</span></div>
        <div class="conter-detail">
          <ul>
            <li>
             <img src=""/>
             <p><span>社区开展学雷锋日</span><span>社区活动</span></p>
            </li>
            
             <li>
             <img src=""/>
             <p><span>社区开展学雷锋日</span><span>社区活动</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div class="community-right">
      <div class="conter-box">
        <div class="conter-title"><span>日常走访统计</span></div>
        <div class="conter-detail 135">
          <p class="box-h3-title">展小城大爱 现社区温情</p>
          <ul class="ul-table">
            <li>
              <span>姓名</span>
              <span>计划走访次数</span>
              <span>完成进度</span>
              <span>已完成走访次数</span>
            </li>
            <li v-for="( index) in 5" :key="index">
              <span>张**</span>
              <span style="color: #02E58D">234</span>
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
          <p class="box-h3-title">不出社区即可创业就业</p>
          <ul>
            <li>
              <img src="../../assets/community/banshi_icon.png"/>
              <p><span>职业技能培训</span><span><strong>{{ 312 }}</strong></span></p>
              
            </li>
            <li>
              <img src="../../assets/community/jiuye_icon.png"/>
              <p><span>创新创业指导</span> <span><strong>{{ 432 }}</strong></span></p>
            </li>
            <li>
              <img src="../../assets/community/xingxi_icon.png"/>
              <p><span>招聘信息发布</span><span><strong>{{ 132 }}</strong></span></p>
            </li>
            <li>
              <img src="../../assets/community/qiuzhi_icon.png"/>
              <p><span>求职就业援助</span><span><strong>{{ 32 }}</strong></span></p>
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
      align-items: center;
      padding: 0 0.15rem;
      box-sizing: border-box;
      flex-wrap: wrap;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 25%;
        margin: 0.05rem 0;
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
  }
  .box-h3-title {
    text-align: center;
    color: #00D8FF;
    font-size: 0.2rem;
    padding-bottom: 0.1rem;
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
      border-bottom: 1px solid #fff;
      img {
        width: 0.65rem;
        height: 0.65rem;
      }
      
      p {
        display: flex;
        justify-content: space-between;
        width: 4.5rem;
      }
    }
    li:nth-last-child() {
      border-bottom: none;
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
.ul-table {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 0.1rem;
  padding: 0 0.15rem 0.15rem 0.15rem;
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
        width: 1rem;
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

.list-jindu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0.15rem;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  strong {
    display: inline-block;
    width: 2rem;
    height: 0.08rem;
    line-height: 0.16rem;
    background: #02E58D;
    margin-right: 0.1rem;
  }
}
.jiuyechuangye {
  ul {
    li {
      width: 50% !important;
      display: flex;
      flex-direction: row !important;
      padding: 0.2rem 0;
      img {
        width: 0.7rem;
        height: 0.7rem;
      }
      p {
        display: flex;
        flex-direction: column;
        padding-left: 0.15rem;
      }
    }
  }
}
</style>