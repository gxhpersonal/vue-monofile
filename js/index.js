//loading加载 全局调用：this.util.showLoading("");单文件调用：import {util} from "./util";util.showLoading("")
function showLoading() {
  let objE = document.createElement("div");
  objE.setAttribute("id", "utilLoading");
  let newAlertItem = "<div style='position: fixed;z-index: 10;top: 0;left: 0;bottom: 0;right: 0;margin: auto;width: 100%;height: 100%;z-index: 2019;display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;'><div style='background:url(data:image/gif;base64,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) no-repeat;width: 32px;height: 32px;'></div></div>";
  objE.innerHTML = newAlertItem;
  document.body.appendChild(objE);
}
//隐藏loading加载 全局调用：this.util.hideLoading("");单文件调用：import {util} from "./util";util.hideLoading("")
function hideLoading() {
  document.body.removeChild(document.getElementById("utilLoading"));
}
var vm = new Vue({
  el: '#app',
  data: {
    lightVal: "1",
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ],
    tftext: "这是一段24px大小的字体"
  },
  created() {
    showLoading();
    window.addEventListener('devicelight', function (event) {
      console.log(event.value + 'lux');
      this.lightVal = event.value;
    })
    // this.$http.get("api").then(function (data) {
    //   console.log(data)
    // })
  },
  mounted() {

    //运动事件监听
    if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", deviceMotionHandler, false);
    }

    //获取加速度信息
    //通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
    //而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
    var SHAKE_THRESHOLD = 4000;
    var last_update = 0;
    var x,
      y,
      z,
      last_x = 0,
      last_y = 0,
      last_z = 0;
    function deviceMotionHandler(eventData) {
      var acceleration = eventData.accelerationIncludingGravity;
      var curTime = new Date().getTime();
      if (curTime - last_update > 10) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed =
          (Math.abs(x + y + z - last_x - last_y - last_z) / diffTime) * 10000;
        if (speed > SHAKE_THRESHOLD) {
          alert("你中奖啦！"); // Do something
        }
        last_x = x;
        last_y = y;
        last_z = z;
      }
    }
    // this.$http.get("api").then(function (data) {
    //   // console.log(data)
    // })
    // this.$http.post("api",
    //   { mobile: xxxxxxxx },
    //   {
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    //     emulateJSON: true,
    //     progress:function(event){
    //       console.log(event)
    //     }
    //   }
    // ).then(function (data) {
    //   // console.log(data)
    // })

    // axios({
    //   url: "api",
    //   method: "post",
    //   data:  'mobile= xxxxxxxx',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
    // }).then(function (data) {
    //   console.log(data)
    // }).catch(function (err) {
    //   console.log(err)
    // })

    // console.log(this.todos)
  },
  methods: {
  }
})