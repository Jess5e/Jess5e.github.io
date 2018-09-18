$(function () {

  //加载公共页面
  $('.header').load('header.html');
  $('.go-top').load('go-top.html');

  /*头部菜单点击事件*/
  var div = $('.header .menu div');
  $('.header').on('click', div, function () {
    $('.link').slideToggle('fast');
  });

  //加载图片并注册事件

  $.getJSON("./json/user.json", function (data) {
    $.each(data.project, function (i, item) {
      var $a = $('<a href="img-desc.html?id=' + (i + 1) + '" target="_blank">点击查看</a>');
      var $span = $('<span>' + item.desc + '</span>');
      var $p = $('<p class="hidden-xs hidden-sm hidden-md"></p>');

      $span.appendTo($p);
      $a.appendTo($p);

      var $img = $('<img src="./images/' + item.name + '" alt="' + item.desc + '" index="' + (i + 1) + '">');
      var $cover = $('<div class="cover"></div>');
      var $imgClass = $('<div class="img"></div>');

      $img.appendTo($imgClass);
      $cover.appendTo($imgClass);
      $p.appendTo($imgClass);

      var $imgCon = $('<div class="img-con col-xs-12 col-sm-12 col-md-12 col-lg-6 clearfix"></div>');
      $imgClass.appendTo($imgCon);
      $imgCon.appendTo($('.images'));
      console.log(i)
    });

    var width = $(window).width();
    if (width < 1200) {
      var $img = $('.images>.img-con>.img>img');
      var $imgClass = $('.images>.img-con>.img');
      $imgClass.on('click', $img, function () {
        var index = $(this).find('img').attr('index');
        window.location.href = 'img-desc.html?id=' + index;
      })
    }
  });

});