var vm = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ],
    tftext:"这是一段24px大小的字体"
  },
  mounted() {
    console.log(this.todos)
  }
})