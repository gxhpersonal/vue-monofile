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
    //获取亮度0 - 1之间的数值
    alert(plus.screen.getBrightness())
    setTimeout(()=>{plus.screen.setBrightness( 0.5 );},20000)
    // this.$http.get("api").then(function (data) {
    //   console.log(data)
    // })
  },
  mounted() {
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
    setLight: function (val) {
      plus.screen.setBrightness(val/100);
    }
  }
})