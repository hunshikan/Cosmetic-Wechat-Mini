Page({
  data: {
    activeIndex: 0,
    sliderOffset: 0,
    scrollLeft: 0,
    sliderLeft: 20,
    sliderWidth: 128
  },
  
  onLoad: function () {
    that = this
    var query = new AV.Query('Category')
    query.find().then(function (products) {
      for(let i = 0; i < products.length; i++){
        tabs[i] = {"name" : products[i].attributes.name, "type" : products[i].attributes.type}
      }
      console.log(tabs[0].name)
      that.setData({
        tabs: tabs
      })
    }).catch(function (error) {
      console.log(JSON.stringify(error));
    })
  },
  tabClick: function(e) {
    let index = e.currentTarget.dataset.index
    console.log(e.currentTarget.offsetLeft)
    console.log(tabs[index])
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: index,
      sliderWidth: tabs[index].name.length * 32,
      scrollLeft: e.currentTarget.offsetLeft
    });
  }
})

const AV = require('../../libs/av-weapp-min.js')
var tabs = []
var that



