Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    wx.request({
      url: 'https://wdd.free.qydev.com/science/get',
      data: {
        id: options.id
      },
      success(res) {
        if(res.statusCode === 200){
          const result = res.data;
          result.psContext = result.psContext.replace(/^\s+/, '');
          result.hasImg = result.psImgSrc.indexOf('.mp4') !== -1 ? false : true;
          result.releaseTime = result.releaseTime.slice(0, 10);
          _this.setData({
            result
          })
        }
      },
      fail(error) {
        console.log("something wrong")
      },
      complete() {
        console.log(_this.data.result);
      }
    })
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