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