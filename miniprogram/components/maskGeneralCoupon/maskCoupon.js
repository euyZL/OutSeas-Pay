// components/maskCoupon/maskCoupon.js
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
    showButton: false,
    buttonText: "领取更多",
    numberArr: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  },

  lifetimes: {
    attached: function () {
      this.setData({

      })
      this.animate('.coupon-view', [{
          opacity: 0
        },
        {
          opacity: 1.0
        },
      ], 500)
      this.lottery();
      setTimeout(() => {
        this.setButton(true);
      }, 500)
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
    getMore() {
      let _this = this;
      var eventDetail = {},
        eventOption = {};
      _this.setButton(false);
      this.triggerEvent('getMore', eventDetail, eventOption);
    },
    // 抽奖
    lottery() {
      // 先转个3次
      for (let i = 0; i < 2; i++) {
        this.animate('.lottery-box', [{
            translateY: 0
          },
          {
            translateY: -837 //9*93
          }
        ], 500)
      }
      // 过度速度
      this.animate('.lottery-box', [{
          translateY: 0
        },
        {
          translateY: -837
        }
      ], 900)
      // 然后按照random到的数字转到指定的位置
      let random = parseInt(Math.random() * 4);
      this.animate('.lottery-box', [{
          translateY: 0
        },
        {
          translateY: -93 * random
        }
      ], random * 220)
    }
  }
})