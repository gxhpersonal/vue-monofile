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
    window.addEventListener('devicelight', function(event) {
      console.log(event.value + 'lux');
      this.lightVal = event.value;
    })
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
  }
})