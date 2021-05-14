const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopName: 'watsons',
    showMask: true,
    maskCoupon: {
      showExchange: true,
      showGeneral: false,
    },
    payCouponList: [],
    shopCouponList: [],
    couponInfo: { // 弹窗汇率券测试数据
      couponClass: "exchange-coupon",
      couponAmount: "",
      couponAmountTip: '',
      couponName: "超优汇率券",
      couponTime: "7天内笔笔有效",
      couponStatus: '生效中',
      couponTipL: '100港币=85.41人民币',
      couponTipR: '市场参考价',
      tipMoney: '85.80人民币',
      couponTip: "境外线下门店支付时，每单都可享受微信支付超优汇率，生效期7天",
    },
    couponInfo2: { // 弹窗通用券测试数据
      couponClass: "general-coupon",
      couponAmount: "3",
      couponAmountTip: '满300元可用',
      couponName: "境外通用券",
      couponTime: "15天内有效",
      couponStatus: '已领取',
      couponTipL: '4张待解锁',
      couponTipR: '使用后扫不同码可解锁下一张',
      tipMoney: '',
      couponTip: "使用后，扫不同礼包码，可获得2倍优惠，第5次将出现超级优惠",
    },
    // couponInfo3: {
    //   couponClass: "exclusive-coupon",
    //   couponAmount: "20",
    //   couponAmountTip: '满300元可用',
    //   couponName: "屈臣氏专享券",
    //   couponTime: "21天内有效",
    //   couponStatus: '已领取',
    //   couponTipL: '香港地区屈臣氏线下门店可用',
    //   couponTipR: '',
    //   tipMoney: '',
    // },

    // shopList: [{
    //   couponName: "Hallmork Babies",
    //   couponType: "新品折扣券",
    //   couponAmount: "9",
    //   couponTipL: "满300港币可用",
    //   couponTipR: "",
    // }, {
    //   couponName: "Designer Trend",
    //   couponType: "精美礼品券",
    //   couponAmount: "",
    //   couponTipL: "满300港币可得",
    //   couponTipR: "",
    // }, {
    //   couponName: "Petit Bateau",
    //   couponType: "全场通用券",
    //   couponAmount: "20",
    //   couponTipL: "满300港币可用",
    //   couponTipR: "",
    // }, {
    //   couponName: "The Runabouts",
    //   couponType: "桌上吸尘机",
    //   couponAmount: "80",
    //   couponTipL: "原价",
    //   couponTipR: "82.5港币",
    // }],
  },

  // 关闭蒙层
  closeMask: function () {
    this.setData({
      showMask: false,
    })
  },

  // 下一张
  nextCoupon: function () {
    let _this = this;
    setTimeout(() => {
      _this.setData({
        maskCoupon: {
          showExchange: false,
          showGeneral: true,
        },
      })
    }, 500);
    console.log(this.data.maskCoupon);
  },

  // 领取更多
  moreCoupon: function () {
    this.setData({
      showMask: false,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    this.setData({
      navHeight: App.globalData.navHeight,
    })
    console.log("navHeight=", this.data.navHeight)
    const eventChannel = this.getOpenerEventChannel();
    console.log(this.getOpenerEventChannel)
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      _this.setData({
        payCouponList: data.payCouponList,
        shopCouponList: data.shopCouponList,
      })
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