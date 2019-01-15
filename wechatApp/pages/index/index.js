//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    storyStr: "",
    // 组件的绑定数据
    isShow: false
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 来自页面内转发按钮
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '👀 想认识平行宇宙✨中的自己吗？',
      path: 'index',
    }
  },
  onReady: function() {
    let aa = "在电影《彗星来的那一夜》中，提到了一个神秘的平行宇宙。一颗米勒彗星划过地球，他们的手机失去信号，电脑失去连接甚至电源短路，大家开始讨论这一切是否是彗星造成的，这时Em讲述了一个很久之前听过的传说并坦言她对彗星的到来有着不祥的预感，但朋友们只是一笑而过，直到他们参观附近的房子时，看到一模一样的自己在另外一个空间，同样的场景，同样的人物，但是从细节上看每一个空间却有不同...\n 想了解另一个宇宙中的自己吗？👇";
    let i = aa.length;
    let j = 0;
    let self = this;
    let set = setInterval(function() {
      j++;
      let str = aa.substring(0, j);
      self.setData({
        storyStr: str
      });
      if (j == i) {
        clearInterval(set);
      }
    }, 200);
  },
  // 点击开始按钮事件
  viewTap: function() {
    let that = this;
    let probability = Math.ceil(Math.random() * 5);
    // 当随机数为1的时候，拒绝联系。
    if (probability == 0){
      //调用的弹框组件。绑定数据。
      that.setData({
        isShow: true,
        imageUrl: '../images/error.png',
        toastText: '神秘的那个ta拒绝了你的好友请求...',
        isBtnShow: true,
        btnCancelText: '放弃联系',
        btnSureText: '查看原因'
      })
    }else{
      wx.navigateTo({
        url: '../activity/activity', //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
        success: function () { },//成功后的回调；
        fail: function () {
          //调用的弹框组件。绑定数据。
          that.setData({
            isShow: true,
            imageUrl: '../images/error.png',
            toastText: '神秘的那个ta拒绝了你的好友请求...',
            isBtnShow: true,
            btnCancelText: '放弃联系',
            btnSureText: '查看原因'
          })
        }, //失败后的回调；
        complete: function () { } //结束后的回调(成功，失败都会执行)
      });
    }
   

  }


})