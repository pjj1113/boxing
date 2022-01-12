<template>
  <div class="person-room">
    <div class="person-left">
      <div class="conter-box">
        <div class="conter-title"><span>今日博兴</span></div>
        <div class="conter-detail">
          <div>
            <div class="conter-subtitle green"><span>热线报警</span></div>
            <el-row type="flex" justify="space-between">
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">报警呼入数</div>
                  <div class="target-num bx-green">1223</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">火警数</div>
                  <div class="target-num bx-green">149</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">急救来电数</div>
                  <div class="target-num bx-green">4345</div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div>
            <div class="conter-subtitle blue"><span>民生服务</span></div>
            <el-row type="flex" justify="space-between">
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">事件总数</div>
                  <div class="target-num bx-purple">178</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">在办理数</div>
                  <div class="target-num bx-purple">69</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">已办理数</div>
                  <div class="target-num bx-purple">73</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">完结率</div>
                  <div class="target-num bx-purple">98%</div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="bo-table" style="padding: 0 10px">
            <el-row type="flex" justify="space-between">
              <el-col :span="2">&nbsp;</el-col>
              <el-col :span="6">事件类别</el-col>
              <el-col :span="6">事件状态</el-col>
              <el-col :span="6">事件内容</el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :span="2">1</el-col>
              <el-col :span="6">政策咨询</el-col>
              <el-col :span="6">待派发</el-col>
              <el-col :span="6">事件内容描述</el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :span="2">2</el-col>
              <el-col :span="6">社会服务</el-col>
              <el-col :span="6">待审核</el-col>
              <el-col :span="6">事件内容描述</el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col :span="2">3</el-col>
              <el-col :span="6">环境治理</el-col>
              <el-col :span="6">已完结</el-col>
              <el-col :span="6">事件内容描述</el-col>
            </el-row>
          </div>
          <div>
            <div class="conter-subtitle red"><span>党建引领</span></div>
            <el-row type="flex" justify="space-between">
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">党支部数</div>
                  <div class="target-num bx-blue">88</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">党员数</div>
                  <div class="target-num bx-blue">687</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">优秀党员数</div>
                  <div class="target-num bx-blue">76</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">党组织活动</div>
                  <div class="target-num bx-blue">313</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">社区活动</div>
                  <div class="target-num bx-blue">35</div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div>
            <div class="conter-subtitle yellow"><span>疫情统计</span></div>
            <el-row type="flex" justify="space-between">
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">确诊病例</div>
                  <div class="target-num bx-red">12</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">疑似病例</div>
                  <div class="target-num bx-red">28</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">密接数</div>
                  <div class="target-num bx-red">45</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">次密接数</div>
                  <div class="target-num bx-yellow">166</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">扫码数</div>
                  <div class="target-num bx-green">2366</div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div>
            <div class="conter-subtitle green"><span>设备设施健康状态</span></div>
            <el-row type="flex" justify="space-between">
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">设备总数</div>
                  <div class="target-num bx-green">88</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">正常设备</div>
                  <div class="target-num bx-green">76</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">异常设备</div>
                  <div class="target-num bx-red">4</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="target-block">
                  <div class="target-title">设备完好率</div>
                  <div class="target-num bx-green">99%</div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="person-content">
      <el-row type="flex" justify="space-around">
        <el-col :span="4">
          <div class="target-block">
            <div class="target-title">平安指数</div>
            <div class="target-num bx-green">96</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="target-block">
            <div class="target-title">交通拥堵指数</div>
            <div class="target-num bx-green">8.9</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="target-block">
            <div class="target-title">人流指数</div>
            <div class="target-num bx-green">93.9</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="target-block">
            <div class="target-title">活力指数</div>
            <div class="target-num bx-green">96.8</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="target-block">
            <div class="target-title">绿色生态指数</div>
            <div class="target-num bx-green">98.8</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="person-right">
      <div class="conter-box">
        <div class="conter-title"><span>重点监控区域</span></div>
        <div class="conter-detail" style="padding: 0 .5rem">
          <el-row :gutter="20">
            <el-col :span="12">
                <div>
                  <img src="../../assets/index/monitor1.png" alt="" width="100%">
                  <div>小区名称 小区位置</div>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <img src="../../assets/index/monitor2.png" alt="" width="100%">
                  <div>小区名称 小区位置</div>
                </div>
              </el-col>
          </el-row>
          <el-row :gutter="20">
              <el-col :span="12">
                <div>
                  <img src="../../assets/index/monitor1.png" alt="" width="100%">
                  <div>小区名称 小区位置</div>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <img src="../../assets/index/monitor2.png" alt="" width="100%">
                  <div>小区名称 小区位置</div>
                </div>
              </el-col>
          </el-row>
        </div>
      </div>
      <div class="conter-box">
        <div class="conter-title"><span>社区概况</span></div>
        <div class="conter-detail">
          <el-row type="flex" justify="space-between">
           <el-col :span="6">
              <div class="target-block">
                <div class="target-title">建筑总面积</div>
                <div class="target-num bx-green">51230</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="target-block">
                <div class="target-title">建设总面积</div>
                <div class="target-num bx-green">21000</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="target-block">
                <div class="target-title">居住面积</div>
                <div class="target-num bx-green">38000</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="target-block">
                <div class="target-title">配套面积</div>
                <div class="target-num bx-green">2000</div>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
           <el-col :span="6">
              <div class="target-block">
                <div class="target-title">社区总人口</div>
                <div class="target-num bx-green">5854</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="target-block">
                <div class="target-title">住户人数</div>
                <div class="target-num bx-green">3000</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="target-block">
                <div class="target-title">已入驻企业</div>
                <div class="target-num bx-green">100</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="target-block">
                <div class="target-title">企业员工</div>
                <div class="target-num bx-green">1980</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="conter-box">
        <div class="conter-title"><span>社区活动成果</span></div>
        <div class="conter-detail">
          <el-row type="flex" justify="space-between">
           <el-col :span="6">
              <div class="target-block">
                <div class="target-title">社区活动总数</div>
                <div class="target-num bx-green">2018</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="target-block">
                <div class="target-title">本月新增数</div>
                <div class="target-num bx-green">109</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="target-block">
                <div class="target-title">活动成果数</div>
                <div class="target-num bx-green">987</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  }
};
</script>

<style lang="scss" scoped>
.person-room {
  color: #fff;
  z-index: 10000;
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
    flex: 1;
    padding: 0 .2rem;
    .target-block {
      padding-top: 15px;
      border: 1px solid #00D8FF;
      background: linear-gradient(322deg, #0043AD 0%, #011F39 100%);
    }
  }
  .person-right {
    display: flex;
    flex-direction: column;
    width: 5rem;
  }
}
.conter-box {
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
    margin-top: 0.2rem;
    .conter-subtitle {
      font-size: 0.2rem;
      padding-left: 10px;
      margin: 5px 0 10px;
      border-bottom: 1px solid #000;
      border-image: linear-gradient(90deg, rgba(255,255,255, 0) 0, rgba(255,255,255, 0) 1rem, #0089FF 2rem, rgba(56, 117, 128, 0) 100%) 10 10;
      span {
        margin-bottom: -1px;
        display: inline-block;
        padding: 4px 0;
        border-bottom: 1px solid #000;
      }
      &.green span {
        border-image: linear-gradient(90deg, #00FE90 0%, #387580 100%) 10 10;
      }
      &.blue span {
        border-image: linear-gradient(90deg, #0089FF 0%, #387580 100%) 10 10;
      }
      &.red span {
        border-image: linear-gradient(90deg, #F24466 0%, #806D38 100%) 10 10;
      }
      &.yellow span {
        border-image: linear-gradient(90deg, #FFCD5C 0%, #387580 100%) 10 10;
      }
    }
  }
}
</style>