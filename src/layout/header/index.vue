<template>
  <div class="header">
    <div class="header-left">
      <div>
        <p>
          {{
            info.temperature +
            "℃" +
            "  " +
            info.weather +
            " " +
            info.winddirection +
            "风" +
            info.windpower +
            "级"
          }}
        </p>
      </div>
    </div>
    <h2 >博兴街道智慧社区管理平台 </h2>
    <div class="header-right">
      <p>{{ date + "  " + time + "  " + "星期" + day }}</p>
      <div class="header-right-btn">
        <el-dropdown>
          <span class="el-dropdown-link"
            ><i class="el-icon-setting" style="color: #fff"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><a @click="toggleFullscreen" href="#">{{
                !is ? "退出全屏" : "全屏浏览"
              }}</a></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentinfo"],
  data() {
    return {
      timer: null,
      time: "",
      date: "",
      day: "",
      info: {},
      isFullScreen: false,
      villageName: "",
      flag: 0,
      is: true,
    };
  },
  computed: {
    countryName() {
      if (!localStorage.getItem("menuData")) return "";
      let menuData = JSON.parse(localStorage.getItem("menuData"))[0];
      let name = "";
      console.log(menuData, this.query().area);
      menuData.children.forEach((item) => {
        if (item.id == this.query().area) {
          name = item.name;
          this.villageName = item.name;
        }
        item.children.forEach((item2) => {
          if (item2.id == this.query().area) {
            name = item.name;
            this.villageName = item2.name;
          }
        });
      });
      return name;
    },
    hraderTitle() {
      if (window.location.href.indexOf("visualization") >= 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.refreshTime();
    this.getWeather();
  },
  methods: {
    goBack() {
      window.history.go(-1);
    },
    // 点击按钮触发的方法
    toggleFullscreen() {
      this.is = !this.is;
      this.flag++;
      this.flag % 2 == 0
        ? this.outFullCreeen(document)
        : this.FullCreeen(document.documentElement);
    },
    // 进入全屏的方法
    FullCreeen(element) {
      let el = element;
      let rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullScreen;
      if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    //退出全屏的方法
    outFullCreeen(element) {
      let el = element;
      let cfs =
        el.cancelFullScreen ||
        el.webkitCancelFullScreen ||
        el.mozCancelFullScreen ||
        el.exitFullScreen;
      if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    query() {
      return this.urlToObject(window.location.search);
    },
    urlToObject(url) {
      var urlObject = {};
      if (/\?/.test(url)) {
        var urlString = url.substring(url.indexOf("?") + 1);
        var urlArray = urlString.split("&");
        for (var i = 0, len = urlArray.length; i < len; i++) {
          var urlItem = urlArray[i];
          var item = urlItem.split("=");
          urlObject[item[0]] = item[1];
        }
        return urlObject;
      }
    },
    getWeather() {
      fetch(
        "https://restapi.amap.com/v3/weather/weatherInfo?key=f4e5f7d0258495501f6bbf7a8bffdb7c&city=411525&extensions=base"
      ).then((res) => {
        res.json().then((resJson) => {
          this.info = resJson.lives[0];
        });
      });
    },
    refreshTime() {
      this.date = this.parseTime(new Date(), "{y}-{m}-{d}");
      this.day = this.parseTime(new Date(), "{a}");
      this.timer = setInterval(() => {
        this.time = this.parseTime(new Date(), "{h}:{i}:{s}");
      }, 1000);
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
  z-index: 600;
  height: 0.8rem;
  width: 100%;
  background: url("../../assets/home/header_bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.4rem;
}

.header .header-left {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  font-size: 0.3rem;
  color: #fff;
}

.header h2 {
  width: 100%;
  font-size: 0.35rem;
  color: #fff;
  text-align: center;
}

.header h2 span {
  font-size: 0.3rem;
  padding: 0 0.3rem;
}

.header .header-right {
  position: absolute;
  display: flex;
  right: 0.4rem;
  font-size: 0.2rem;
  top: 0.2rem;
  z-index: 700;
}

.header .header-right p {
  color: #fff;
  font-size: 0.25rem;
}

.header .header-right div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header .header-right .header-right-btn {
  border-left: 0.01rem solid #fff;
  margin-left: 0.2rem;
  padding-left: 0.2rem;
}

.header .header-right .el-icon-setting {
  font-size: 0.4rem;
}
</style>