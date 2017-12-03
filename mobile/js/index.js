/**
 * Created by dell on 2017/12/2.
 */
$(function(){
    var mySwiper = new Swiper ('.lubo_wrap', {
        direction: 'horizontal',
        loop: true,
        autoplay: 2000,
        // 如果需要分页器
        pagination: '.swiper-pagination'
    })
});
$(function(){
    var percent = 750/document.documentElement.clientWidth;
    var w = 136/percent;
    var h = 136/percent;
    var fz=38/percent;
    var cfg = {
        width:w+5,
        height:h+5,
        diameter:w/2,
        fontColor:'#FB4034',
        fontSize:fz,
        lineColor:'#FA3012',
        remainingLineColor:'#FFE2E0',
        percentage:'37'

    }
    $('.loader').ClassyLoader(cfg);
    cfg.percentage = '56';
    $('.loader_zhuji').ClassyLoader(cfg);
    cfg.percentage = '62';
    $('.loader_yingli').ClassyLoader(cfg);
})


$(function(){
    $('.icon_list li').eq(3).tap(function(event){
        location.href='http://localhost:8421/mobile/html/help.html';
    })
})



