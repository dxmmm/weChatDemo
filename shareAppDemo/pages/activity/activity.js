Page({

  /**
   * 页面的初始数据
   */
  data: {
    reasonUrl: "../../images/1.png",
    windowWidth:wx.getSystemInfoSync().windowWidth,
    canvasHeight:'0'
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let reasonArray = [{
      "profession": "公主",
      "url": "../../images/princess.png"
    }, {
      "profession": "最讨厌甜食的冰淇淋师傅",
      "url": "../../images/icecream.png"
    }, {
      "profession": "失去味觉的厨师",
      "url": "../../images/cooks.png"
    }, {
      "profession": "喜欢骗人的演员",
      "url": "../../images/actor.png"
    }, {
      "profession": "聪明又努力的超级大美女",
      "url": "../../images/lady.png"
    }, {
      "profession": "藏有惊天大秘密的流浪汉",
      "url": "../../images/hamburg.png"
    }, {
      "profession": "超级厉害的蛋糕师",
      "url": "../../images/cake.png"
    }, {
      "profession": "喜欢养锦鲤的神婆",
      "url": "../../images/jinliyu.png"
    }, {
      "profession": "有自我意识的机器人",
      "url": "../../images/jiqiren.png"
    }, {
      "profession": "讨厌布置作业的老师",
      "url": "../../images/laoshi.png"
    }, {
      "profession": "迷恋神学的科学家",
      "url": "../../images/feichuan.png"
    }, {
        "profession": "神游太空的天文学家",
        "url": "../../images/feichuan.png"
    },{
      "profession": "中了大乐透的超级幸运儿",
      "url": "../../images/bailing.png"
    }, {
      "profession": "富有爱心的动物饲养员",
      "url": "../../images/shizi.png"
    }, {
      "profession": "救死扶伤的医生",
      "url": "../../images/yisheng.png"
    }, {
      "profession": "不差钱的滑雪冠军",
      "url": "../../images/huaxue.png"
    }];
    let xingge = ['大概宇宙第一可爱的那种可爱', '不是那么可爱却很真诚', '有点儿烦人但有很多真心朋友', '讨人喜欢', '墨墨迹迹但懂事', '干脆利落', '有一丢丢不可爱但大部分时候很可爱', '又酷又软且萌', '温柔又勇敢', '有点点儿白痴却很温柔可爱', '大条却很可爱', '温柔又勇敢', '孤僻但有一颗温柔的内心'];
    let bianhao = Math.ceil(Math.random() * 10000);
    let food = ['饼干', '玫瑰花馅饼', '桂花糊米酒小汤圆', '热干面', '周黑鸭鸭脖子', '小胡鸭脆黄瓜', '糖葫芦', '北京烤鸭', '火锅', '吃素','烧烤','章鱼小丸子','豆角焖面','胡辣汤','咸味豆腐脑'];

    let reasonNum = Math.ceil(Math.random() * (reasonArray.length - 1));
    let xinggeNum = Math.ceil(Math.random() * (xingge.length - 1));
    let foodNum = Math.ceil(Math.random() * (food.length - 1));
    let characterNum = Math.ceil(Math.random() * (xingge.length - 1));
    this.setData({
      reasonUrl: reasonArray[reasonNum].url,
      bianhao: bianhao,
      xingge: xingge[xinggeNum],
      food: food[foodNum],
      profession: reasonArray[reasonNum].profession,
      character: xingge[characterNum]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
   
   
  },
  /**
   * 分享至朋友圈
   */
  shareTap:function(){
    // 获取用户头像照片，存为portrait_temp。
    // 并设置小程序二维码照片为qrcode_temp
    let that = this;
    let avatarUrl = wx.getStorageSync('userInfo').avatarUrl;
    if (avatarUrl){
      wx.downloadFile({
        url: avatarUrl,
        success: function (res1) {
          //缓存头像图片
          that.setData({
            portrait_temp: res1.tempFilePath,
            qrcode_temp: '../../images/WeChat.jpg'
          })
          console.log(that.data.portrait_temp);
          that.drawImage();
          // 200毫秒后绘制完成转化为图片
          setTimeout(function () {
            that.canvasToImage()
          }, 200)
        }
      })
    }else{
      //当用户未授权的时候，缓存头像图片
      that.setData({
        portrait_temp: '../../images/7.jpg',
        qrcode_temp: '../../images/WeChat.jpg'
      })
      that.drawImage();
      // 200毫秒后绘制完成转化为图片
      setTimeout(function () {
        that.canvasToImage()
      }, 200)
    }
    
  },
  /**
   * canvas绘制图片的函数
   */
  drawImage: function () {
    //绘制canvas图片
    let that = this
    const ctx = wx.createCanvasContext('myCanvas')
    let bgPath = '../../images/5.png'
    let portraitPath = that.data.portrait_temp
    let hostNickname = wx.getStorageSync('userInfo').nickName

    var qrPath = that.data.qrcode_temp
    var windowWidth = that.data.windowWidth
    that.setData({
      scale: 1.6,
      canvasHeight:'500'
    })
    //绘制背景图片
    ctx.drawImage(bgPath, 0, 0, windowWidth, that.data.scale * windowWidth)

    //绘制头像
    ctx.save()
    ctx.beginPath()
    ctx.arc(windowWidth / 2, 0.32 * windowWidth, 0.15 * windowWidth, 0, 2 * Math.PI)
    ctx.clip()
    ctx.drawImage(portraitPath, 0.7 * windowWidth / 2, 0.17 * windowWidth, 0.3 * windowWidth, 0.3 * windowWidth)
    ctx.restore()
    //绘制第一段文本
    ctx.setFillStyle('#00172E')
    ctx.setFontSize(0.037 * windowWidth)
    ctx.setTextAlign('center')
    ctx.fillText(hostNickname + '已收到来自平行宇宙的问候~', windowWidth / 2, 0.52 * windowWidth)
    //绘制第二段文本
    ctx.setFillStyle('#00172E')
    ctx.setFontSize(0.037 * windowWidth)
    ctx.setTextAlign('center')
    ctx.fillText('邀请你一起来认识平行宇宙中那个不一样的ta！', windowWidth / 2, 0.57 * windowWidth)
    //绘制二维码
    ctx.drawImage(qrPath, 0.64 * windowWidth / 2, 0.75 * windowWidth, 0.36 * windowWidth, 0.36 * windowWidth)
    //绘制第三段文本
    // ctx.setFillStyle('#ffffff')
    // ctx.setFontSize(0.037 * windowWidth)
    // ctx.setTextAlign('center')
    // ctx.fillText('长按二维码领红包', windowWidth / 2, 1.36 * windowWidth)
    ctx.draw();
  },
  /**
  * 转为图片
  */
  canvasToImage: function () {
    var that = this
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: that.data.windowWidth,
      height: that.data.windowWidth * that.data.scale,
      destWidth: that.data.windowWidth * 4,
      destHeight: that.data.windowWidth * 4 * that.data.scale,
      canvasId: 'myCanvas',
      success: function (res) {
        console.log('朋友圈分享图生成成功:' + res.tempFilePath)
        wx.previewImage({
          current: res.tempFilePath, // 当前显示图片的http链接
          urls: [res.tempFilePath] // 需要预览的图片http链接列表
        })
      },
      fail: function (err) {
        console.log('失败')
        console.log(err)
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    if (res.from == 'button') {
      console.log(res.target);
    }
    return {
      title: '👀 想认识平行宇宙✨中的自己吗？',
      path: '/pages/inde/index?id='
    } 
  }
})