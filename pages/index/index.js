// miniprogram/pages/index/index.js
Page({

    data: {
      infoMess: '',
      searchmess:'',
    
  },
  handinput(event){
    console.log("用户输入内容",event)
  },
  handfocus(event) {
    console.log("input获得焦点", event)
  },
  handblur(event) {
    console.log("input失去焦点", event)
  }
})