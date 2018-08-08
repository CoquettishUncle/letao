if(location.href.indexOf('login.html')=== -1){
  $.ajax({
    type:'get',
    url:'/employee/checkRootLogin',
    datatype:'json',
    success:function (info){
      if(info.success){
        console.log('已登录')
      }
      if(info.success === 400){
        location.href = 'login.html'
      }
    }
  })
}








$(document).ajaxStart(function(){
  NProgress.start();
})
$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },500)
})


$(function() {

  // 公共的功能实现
  // 1. 左侧二级菜单切换
  $('.lt_aside .click').click(function() {
    $('.lt_aside .child').stop().slideToggle();
  })


  // 2. 点击切换侧边栏
  $('.icon_menu').click(function() {
    $('.lt_aside').toggleClass("hiddenlt");
    $('.lt_header').toggleClass("hiddenlt");
    $('.lt_main').toggleClass("hiddenlt");
  })


  // 3. 点击退出菜单, 显示退出模态框
  $('.icon_logout').click(function() {
    // 显示模态框
    $('#logoutModal').modal("show");
  });

  // 4. 点击退出按钮, 实现用户退出
  $('#logoutBtn').click(function() {
    // 退出需要发送ajax请求, 让服务器端退出, 销毁该用户的登陆状态
    $.ajax({
      type: "get",
      url: "/employee/employeeLogout",
      dataType: "json",
      success: function( info ) {
        if ( info.success ) {
          // 退出成功, 跳转到登陆页
          location.href = "login.html";
        }
      }
    })
  })


})
