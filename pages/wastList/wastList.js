// pages/wastList/wastList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wasts: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var model = getApp().globalData.collections[option.index]
    this.setData({
      wasts: model.wasts
    });
    wx.setNavigationBarTitle({
      title: model.name,
    })
  
  }

})