Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:'',
    leftCount:1,
    todos: [
      { name: 'Learning WEAPP', completed: true },
      { name: 'Learning JavaScript', completed: false },
      { name: 'Learning HTML', completed: true }
    ],
    allCompleted: false
   
  },
  //清空完成的任务的方法
  clearHandle(){
    var todos = this.data.todos.filter(function (item) {
      return !item.completed
    })
    // todos => 新的未完成的任务列
    this.setData({ todos: todos })
 
  },


    //删除item项的方法

  removeTodoHandle(e){
    var todos = this.data.todos
    // item 就是splice方法中移除掉的元素
    var item = todos.splice(e.currentTarget.dataset.index, 1)[0]
    // todos 中会移除掉 index 所指向的元素
    var leftCount = this.data.leftCount - (item.completed ? 0 : 1)
    this.setData({ todos: todos, leftCount: leftCount })



  },



  //选择所有items
  toggleAllHandle(){
    // this 在这里永远指向的是当前页面对象
    this.data.allCompleted = !this.data.allCompleted
    var todos = this.data.todos
    var that = this
    todos.forEach(function (item) {
      item.completed = that.data.allCompleted
    })
    var leftCount = this.data.allCompleted ? 0 : this.data.todos.length
    this.setData({ todos: todos, leftCount: leftCount })
  },

  toggleHandle(e){
    console.log(e.currentTarget.dataset.index);
    //通过索引找到当前todos中的所对应的item
    var item = this.data.todos[e.currentTarget.dataset.index];
    item.completed = !item.completed;
    // 根据当前任务的完成状态决定增加一个或者减少一个
    var leftCount = this.data.leftCount + (item.completed ? -1 : 1)
    //再把更新好的todos赋值给前端
    this.setData({
      todos:this.data.todos,
      leftCount: leftCount
    });
  },
  addtodoHandler(){
   //获取输入文本框的值
      console.log(this.input);
    if (!this.input)return
      this.data.todos.push({
        name: this.input,
        completed: false
      });
    this.setData({
      todos: this.data.todos,
       input:'',
      leftCount: this.data.leftCount + 1
    });

  },
  inputHandle(e){
    //通过e.detail.value获取文本框的值
   this.input=e.detail.value;
    e.detail.value=null;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})