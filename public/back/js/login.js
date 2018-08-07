




$('#form').bootstrapValidator({
  
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },

  //3. 指定校验字段
  fields: {
    username: {
      validators: {
        //不能为空
        notEmpty: {
          message: '用户名不能为空'
        },
        //长度校验
        stringLength: {
          min: 2,
          max: 6,
          message: '用户名长度必须在2到6之间'
        },
        callback:{
          message:'用户名不存在'
        }
        
       
      }
    },
    password: {
      validators: {
        //不能为空
        notEmpty: {
          message: '密码不能为空'
        },
        //长度校验
        stringLength: {
          min: 6,
          max: 12,
          message: '密码长度必须在6到12之间'
        },
        callback:{
          message:'密码错误'
        }
        //正则校验
       
      }
    }
  }

});



$("#form").on('success.form.bv', function (e) {
  e.preventDefault();
  //使用ajax提交逻辑
  $.ajax({
    type:'post',
    url:'/employee/employeeLogin',
    data:$('#form').serialize(),
    success:function (info){
      if(info.success){
        location.href = 'index.html'
      }
      if(info.error == 1000){
        $('#form').data("bootstrapValidator").updateStatus("username", "INVALID", "callback")
      }
      if(info.error == 1001){
        $('#form').data("bootstrapValidator").updateStatus("username", "INVALID", "callback")
      }
    }
  })
});



$('[type=reset]').click(function(){
  $('#form').data("bootstrapValidator").resetForm();
});