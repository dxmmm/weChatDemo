Page({

  /**
   * 页面的初始数据
   */
  data: {
    reasonUrl: "../../images/1.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
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
      "profession": "超级会做蛋糕的蛋糕师",
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
      "profession": "只拿工资不干活的精英",
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
    let xingge = ['大概宇宙第一可爱', '不是那么可爱', '烦人可有很多好朋友', '讨人喜欢', '墨墨迹迹但懂事', '干脆利落', '有一丢丢不可爱但大部分时候很可爱', '超级酷也软萌', '温柔又勇敢', '白痴却温柔', '傻叉却很可爱', '傻逼脸温柔心','奇怪却温柔'];
    let bianhao = Math.ceil(Math.random() * 10000);
    let food = ['饼干', '玫瑰花瓣', '桂花糊米酒小汤圆', '热干面', '周黑鸭的鸭脖子', '小胡鸭的脆黄瓜', '糖葫芦', '北京烤鸭', '火锅', '吃素'];

    let reasonNum = Math.ceil(Math.random() * (reasonArray.length - 1));
    let xinggeNum = Math.ceil(Math.random() * (xingge.length - 1));
    let foodNum = Math.ceil(Math.random() * (food.length - 1));
    let characterNum = Math.ceil(Math.random() * (xingge.length - 1));
    this.setData({
      reasonUrl: reasonArray[reasonNum].url,
      bianhao:bianhao,
      xingge:xingge[xinggeNum],
      food:food[foodNum],
      profession: reasonArray[reasonNum].profession,
      character:xingge[characterNum]
    })

  },
  


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '👀 想认识平行宇宙✨中的自己吗？'
    }
  }
})