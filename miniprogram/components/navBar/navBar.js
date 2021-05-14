const App = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopName: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached: function () {
      this.setData({
        navHeight: App.globalData.navHeight,
        navTop: App.globalData.navTop
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})