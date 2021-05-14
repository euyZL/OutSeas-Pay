const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '境外游礼包',
    navTop: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navTop: App.globalData.navTop
    })
  },

  // 自定义异步调用函数
  promiseify(fn) {
    return async function (args) {
      return new Promise((resolve, reject) => {
        fn({
          ...(args || {}),
          success: (res) => {
            resolve(res);
          },
          fail: (res) => {
            reject()
          },
        })
      })
    }
  },

  async getRequestData(url) {
    // 获取优惠券数据
    let conponList;
    const getCoupon = this.promiseify(wx.request)
    try {
      const res = await getCoupon({
        url: url,
        dataType: 'json',
        data: {
          number: "all"
        },
      })
      conponList = res.data.couponList
      console.log(conponList)
      return conponList;
    } catch (e) {
      wx.showModal({
        title: '提示',
        content: '网络延时，重新加载',
        success: (res) => {
          if (res.confirm) {
            that.onReady()
          } else if (res.cancel) {
            console.log('取消')
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {
  async onReady() {
    let isModefied = false;
    let payCouponList = [];
    let shopCouponList = [];
    //先发送请求检查数据是否有修改过
    try {
      const getIsModef = this.promiseify(wx.request);
      const res = await getIsModef({
        url: 'https:\/\/example\.com\/coupon\/ismodefied',
        dataType: 'json',
      })
      isModefied = res.data.isModefied;
      console.log(isModefied)
    } catch (e) {
      console.log("error1=", e)
    }
    if (!isModefied) {
      console.log("没有修改")
      // 如果没有修改过，则检查缓存
      try {
        payCouponList = wx.getStorageSync('payCouponList')
        shopCouponList = wx.getStorageSync('shopCouponList')
        console.log(payCouponList)
        console.log(shopCouponList)
        if (!(payCouponList && shopCouponList)) {
          //如果没有缓存则发起请求
          console.log("没有缓存")
          payCouponList = await this.getRequestData("https://example.com/coupon?couponlist=paycoupon");
          shopCouponList = await this.getRequestData("https://example.com/coupon?couponlist=shopcoupon");
          console.log(payCouponList)
          console.log(shopCouponList)
          //缓存
          wx.setStorageSync({
            key: "payCouponList",
            data: payCouponList
          });
          wx.setStorageSync({
            key: "shopCouponList",
            data: shopCouponList
          });
        }
      } catch (e) {
        console.log("error3=", e)
      }
    } else {
      //修改过则发起请求
      payCouponList = this.getRequestData("https://example.com/coupon?couponlist=paycoupon");
      shopCouponList = this.getRequestData("https://example.com/coupon?couponlist=shopcoupon");
      //缓存
      wx.setStorageSync({
        key: "payCouponList",
        data: payCouponList
      });
      wx.setStorageSync({
        key: "shopCouponList",
        data: shopCouponList
      });
    }
    // 路由跳转
    wx.navigateTo({
      url: '../index/index',
      success: function (res) {
        // 向跳转页面传数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          payCouponList,
          shopCouponList
        })
      }
    })
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