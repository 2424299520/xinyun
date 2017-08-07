//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  listenerButtonPlay: function () {
    wx.playBackgroundAudio({
      //播放地址  
      dataUrl: 'http://otqmhnftw.bkt.clouddn.com/%E8%94%A1%E7%90%B4%20-%20%E8%A2%AB%E9%81%97%E5%BF%98%E7%9A%84%E6%97%B6%E5%85%89.mp3',
      title: '李宗盛',
      //图片地址  
      coverImgUrl: 'http://ac-5g9r20ds.clouddn.com/63bedb5f584234b6827c.jpg'
    })

  },  
  /** 
 * 播放状态 
 */
  listenerButtonGetPlayState: function () {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        console.log('duration:' + res.duration)
        console.log('currentPosition:' + res.currentPosition)
        console.log('status:' + res.status)
        console.log('downloadPercent:' + res.downloadPercent)
        console.log('dataUrl:' + res.dataUrl)
      }
    })
  },
  /** 
   * 监听button暂停按钮 
   */
  listenerButtonPause: function () {
    wx.pauseBackgroundAudio();
    console.log('暂停播放')
  },
  /** 
   * 设置进度 
   */
  listenerButtonSeek: function () {
    wx.seekBackgroundAudio({
      position: 40
    })
  },
  /** 
   *停止播放  
   */
  listenerButtonStop: function () {
    wx.stopBackgroundAudio()
    console.log('停止播放')
  },  

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    /** 
     * 监听音乐播放 
     */
    wx.onBackgroundAudioPlay(function () {
      console.log('onBackgroundAudioPlay')
    })

    /** 
     * 监听音乐暂停 
     */
    wx.onBackgroundAudioPause(function () {
      console.log('onBackgroundAudioPause')
    })

    /** 
     * 监听音乐停止 
     */
    wx.onBackgroundAudioStop(function () {
      console.log('onBackgroundAudioStop')
    })
  },  
})
