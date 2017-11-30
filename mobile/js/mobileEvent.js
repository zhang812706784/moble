var flag = true;
$('#taohang h1').on('tap',function(){
    flag = !flag;
    $(this).toggleClass('active',flag);
});
