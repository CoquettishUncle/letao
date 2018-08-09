if(location.href.indexOf('login.html')=== -1){
  $.ajax({
    type:'get',
    url:'/employee/checkRootLogin',
    dataType:'json',
    success:function (info){
      if(info.success){
        console.log('已登录')
      }
      if(info.error === 400){
        location.href = 'login.html'
      }
    }
  })
}


$(document).ajaxStart(function() {
  
  NProgress.start();
})
$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },500)
})







$(function() {
  $('.lt_aside .click').click(function() {
    $('.lt_aside .child').stop().slideToggle();
  })
  $('.icon_menu').click(function() {
    $('.lt_aside').toggleClass("hiddenlt");
    $('.lt_header').toggleClass("hiddenlt");
    $('.lt_main').toggleClass("hiddenlt");
  })
  $('.icon_logout').click(function() {
    $('#logoutModal').modal("show");
  });
  $('#logoutBtn').click(function() {
    $.ajax({
      type: "get",
      url: "/employee/employeeLogout",
      dataType: "json",
      success: function( info ) {
        if ( info.success ) {
          location.href = "login.html";
        }
      }
    })
  })


})
