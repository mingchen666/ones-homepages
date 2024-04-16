$(document).ready(function () {
  // 获取每日一言的 API
  var url = 'https://v1.hitokoto.cn/?c=a';

  // 初始加载每日一言
  getQuote();

  // 点击“换一句”按钮获取新的一言
  $('#new-quote').click(function () {
    getQuote();
  });

  function getQuote() {
    $.getJSON(url, function (data) {
      // 将返回的数据显示在页面上
      $('#quote').text(data.hitokoto);
      $('#author').text('——' + data.from);
    });
  }
});
