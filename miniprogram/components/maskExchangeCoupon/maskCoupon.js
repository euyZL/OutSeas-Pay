Component({
  /**
   * 组件的属性列表
   */
  properties: {
    couponInfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showButton: true,
    couponTipLL: "",
    couponTipLR: "",
    buttonText:"领取下一张",
  },

  lifetimes: {
    attached() {
      let strs = this.properties.couponInfo.couponTipL.split('=');
      this.setData({
        couponTipLL: strs[0] + '=',
        couponTipLR: strs[1],
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setButton(bool) {
      this.setData({
        showButton: bool,
      })
    },
    getNext() {
      let _this = this;
      var eventDetail = {},
        eventOption = {};
      this.setButton(false);
      _this.animate('.coupon-view', [{
            translateX: 0
          },
          {
            translateX: 750
          }
        ], 1000);
      this.triggerEvent('getNext', eventDetail, eventOption)
    },
  }
})