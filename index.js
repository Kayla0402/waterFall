// $(function() {
//   waterFall()
// });
$(window).on('load', function() {
  waterFull()
})

function waterFall() {
  // 求出列数
  var box = $('.box')
  var boxWidth = box.outerWidth()
  var windowWidth = $(window).width()
  console.log(boxWidth);
  var cols = parseInt(windowWidth/ boxWidth)
  // 创建一个数组专门存放每行的图片高度
  var heightArr = []
  $.each(box, function(index, item) {
    // 获取每个图片的高度
    var boxHeight = $(item).outerHeight()

    if(index < cols) { // 第一行
      heightArr[index] = boxHeight
    } else { // 其他行要添加定位的样式，并且在高度最低的图片下边添加一个新的图片
      // 最短图片的高度
      var minBoxHeight = Math.min(...heightArr)
      // 数组中最小值的索引
      var minBoxIndes = $.inArray(minBoxHeight, heightArr)

      // 添加定位
      $(item).css({
        position: 'absolute',
        left: minBoxIndes*boxWidth+'px',
        top: minBoxHeight+'px'
      })
      // 高度追加
      heightArr[minBoxIndes] += boxHeight

    }
  })
}

/*
第一排的话是直接把高度放到数组中，第二排选择第一排高度最小的图片，进行定位，
然后在把当前这个最小的高度加上图片的高度
每次都是如此
*/
function waterFull() {
  let boxWidth = $('.box').width()
  let windowWidth = $(window).width()
  let cols = parseInt(windowWidth/boxWidth)
  let heightArr = []
  $.each($('.box'), function(index, item) {
    if(index<cols) { // 第一行
      heightArr[index] = $(item).height()
    } else {
      // 当前高度最小的div高度
      let minBoxHeight = Math.min(...heightArr)
      // 查找当前最小div高度的索引
      let minBoxIndes = $.inArray(minBoxHeight, heightArr)

       // 添加定位
       $(item).css({
        position: 'absolute',
        left: boxWidth*minBoxIndes+'px',
        top: minBoxHeight+'px'
      })
      // 最小高度已经添加过图片了，所以他的高度应该再加上当前图片的高度
      heightArr[minBoxIndes] += $(item).height()

    }

  })
}