<template>
  <div class="header">
    <div class="weather">
      <span><img src="" /></span>
      <strong>{{ info.temperature }}<sup>℃</sup></strong>
      <div class="weather-detail">
        <span>{{ info.weather }}</span>
        <span>{{ info.winddirection + "风" + info.windpower + "级" }}</span>
      </div>
      <div class="split"></div>
      <strong>{{ info.humidity }}</strong>
      <div class="weather-detail">
        <span>%</span>
        <span>湿度</span>
      </div>
    </div>
    <!-- <div class="left-btn-list" v-if="hasbtn">
      <span class="left-btn-item" @click="isShow = true">乡情简介</span>
      <span class="left-btn-item" @click="route">乡村空间</span>
    </div> -->
    <strong class="header-title">{{ title }}</strong>
    <!-- <div class="right-btn-list" v-if="hasbtn">
      <span class="right-btn-item" @click="isShowVideo = true">全域安防</span>
      <span class="right-btn-item">应急发布</span>
    </div> -->
    <div class="header-date">
      <span class="time">{{ time }}</span>
      <span class="date">{{ date }}</span>
    </div>
    <div class="replace">
      <slot name="right-warp"
        ><div onClick="window.history.go(-1)">
          <img
            src="/assets/addons/cms/szxc/assets/img/terrace/replace.png"
          />返回
        </div></slot
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "123",
    },
    routePath: {
      type: String,
      default: "",
    },
    isBtn: {
      type: Boolean,
      default: false,
    },
    hasbtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      info: {},
      time: "",
      timer: null,
      date: "",
      isShow: false,
      isShowVideo: false,
      // route: '/cms/shuzixiangcunkongjian.html' + window.location.search
    };
  },
  mounted() {
    this.getWeather();
    this.refreshTime();
  },
  methods: {
    route() {
      window.location.href =
        "/cms/shuzixiangcunkongjian.html" + window.location.search;
    },
    refreshTime() {
      this.date = this.parseTime(new Date(), "{y}-{m}-{d}");
      this.timer = setInterval(() => {
        this.time = this.parseTime(new Date(), "{h}:{i}:{s}");
      }, 1000);
    },
    getWeather() {
      fetch(
        "https://restapi.amap.com/v3/weather/weatherInfo?key=f4e5f7d0258495501f6bbf7a8bffdb7c&city=411525&extensions=base"
      ).then((res) => {
        res.json().then((resJson) => {
          this.info = resJson.lives[0];
          console.log(resJson.lives[0]);
        });
      });
    },
    parseTime(time, cFormat) {
      if (arguments.length === 0) {
        return null;
      }
      const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
      let date;
      if (typeof time === "object") {
        date = time;
      } else {
        if (typeof time === "string" && /^[0-9]+$/.test(time)) {
          time = parseInt(time);
        }
        if (typeof time === "number" && time.toString().length === 10) {
          time = time * 1000;
        }
        date = new Date(time);
      }
      const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
      };
      const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
          return ["日", "一", "二", "三", "四", "五", "六"][value];
        }
        if (result.length > 0 && value < 10) {
          value = "0" + value;
        }
        return value || 0;
      });
      return time_str;
    },
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 60px;
  background: url('../../assets/home/header_bg.png') no-repeat;
  background-size: 100% 100%;
  text-align: center;
  color: #fff;
  z-index: 600;
  .header-title {
    font-size: 26px;
    text-shadow: 3px 3px 10px #1d508f;
    color: #fff;
    line-height: 60px;
  }
  .weather {
    position: absolute;
    left: 20px;
    top: 20px;
    display: flex;
    strong {
      font-size: 25px;
      font-weight: 400;
      sup {
        font-size: 15px;
      }
    }
    .weather-detail {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 10px;
    }
  }
  .split {
    width: 1px;
    height: 30px;
    margin: 0 8px;
    background-color: #b3b0b0;
  }
  // .left-btn-list {
  //   position: absolute;
  //   top: 38px;
  //   left: 50%;
  //   margin-left: -400px;
  //   display: flex;
  //   .left-btn-item {
  //     display: inline-block;
  //     padding: 0 20px;
  //     height: 25px;
  //     line-height: 25px;
  //     background: url('../../assets/homeleft_btn.png') no-repeat;
  //     background-size: 100% 100%;
  //     cursor: pointer;
  //   }
  // }
  // .right-btn-list {
  //   position: absolute;
  //   top: 38px;
  //   right: 50%;
  //   margin-right: -400px;
  //   display: flex;
  //   .right-btn-item {
  //     display: inline-block;
  //     padding: 0 20px;
  //     height: 25px;
  //     line-height: 25px;
  //     background: url('../../assets/right_btn.png') no-repeat;
  //     background-size: 100% 100%;
  //     cursor: pointer;
  //   }
  // }
  .header-date {
    position: absolute;
    top: 20px;
    right: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 600;
    font-size: 14px;
  }
  .replace {
    position: absolute;
    right: 20px;
    top: 29px;
    width: 50px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #fff;
    border-radius: 3px;
    font-size: 12px;
    cursor: pointer;
    img {
      height: 12px;
    }
  }
  .rules {
    display: flex;
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 20px;
      li {
        width: 100%;
        p {
          width: 100%;
          font-size: 18px;
          display: flex;
          justify-content: space-between;
          line-height: 35px;
          strong {
            font-weight: 500;
          }
        }
      }
    }
  }
}

</style>