// component.js
Component({
  /**
   * 组件的属性列表
   * 绑定的数据需要在这里定义一下数据类型
   */
  properties: {
    isShow: Boolean,
    imageUrl: String,
    toastText: String,
    isBtnShow: Boolean,
    btnCancelText: String,
    btnSureText: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toastSure:function(){
      let reasonArray = ["ta认为自己不值得你期待呢..不如通过公众号留言给ta一点儿安慰吧..✍️","ta表示更期待见到将来那个努力拼搏后更加意气风发的你哟..💪","超酷的ta说今日心情不佳，懒得花时间敷衍你..==d=====(￣▽￣*)b", "好像是觉得你有点儿丑..😂","没说明原因。托话给你：哥们，你再努力一把不成么？！🙈","正努力奋斗的ta表示希望过几年再约。等自己再优秀一些，来你面前秀一把优越！一起加油哟!😎","ta表示更期待见到将来那个努力拼搏后更加意气风发的你哟..💪"];
      let num = Math.ceil(Math.random() * (reasonArray.length - 1));
      this.setData({
        toastText: reasonArray[num],
        isBtnShow:false,
        imageUrl: '../images/2.png'
      })
    },
    toastCancel:function(){
      this.setData({
        isShow :false
      })
    }
  }
})
