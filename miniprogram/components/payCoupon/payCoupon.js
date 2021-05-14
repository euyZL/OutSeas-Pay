// components/payCoupon/payCoupon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    couponInfo:{
      type:Object,
      value:{}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  //组件生命周期
  lifetimes: {
    // 还不能设置数据this.setData
    created: function(){
    },
    // 可以获取值
    attached: function () {
      console.log(this.properties.couponInfo)
     },
    //  组件离开页面节点被出发
     detached(){

     }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
