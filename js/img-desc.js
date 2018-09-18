$(function () {

  function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数 
    var r = window.location.search.substr(1).match(reg);  
    //返回参数值
    if (r != null) return unescape(r[2]); return null;
  }
    var id = parseInt(getUrlParam('id'));
    console.log(id);
    if(id) {
      $.getJSON("./json/user.json", function (data) {
        for(var i=0; i<data.bigPhoto.length; i++) {
          if(i==(id-1)) {
            var src = './images/'+data.bigPhoto[i].name;
            $('#img').prop('src',src);
            break;
          }
        }
      });
    }else {
      window.location.href = "index.html";
    }

    $('.goback').click(function() {
      window.history.back();
    })
    
});