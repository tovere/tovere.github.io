// 头部下拉跟随的动画效果
var button_show=true
var scroll_data=$(document).scrollTop() 
$(document).scroll(function(){
    scroll_data=$(this).scrollTop()
    if(button_show==true){
    if($(this).scrollTop()>=80){

        $('#menu').addClass('nav_bottom')
        $('#menu').removeClass('nnav_bottom')

    }else{
            $('#menu').addClass('nav_bottom')
            $('#menu').removeClass('nav_bottom')
            
        }
       }
});

