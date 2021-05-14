// components/shopCoupon/shopCoupon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    couponList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    // 还不能设置数据this.setData
    created: function () {},
    // 可以获取值
    attached: function () {
      
    },
    //  组件离开页面节点被出发
    detached() {

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },

  typeOf: function (str, type) {
    console.log(123);
    return str.indexOf(type);
  }

})