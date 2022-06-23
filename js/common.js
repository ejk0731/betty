

// header 스크롤시 배경주기, 글씨 위치 중간으로 올려주기

$(window).scroll(function(){
    let s_top = $(window).scrollTop();
    if(screen.width > 480) {

        if(s_top >= 90){
            $('header').addClass('header_active')
            $('nav > ul').addClass('nav_ul_active')
        }
        if(s_top <= 5) {
            $('header').removeClass('header_active')
            $('nav > ul').removeClass('nav_ul_active')
        }
    }
    else {
        if(s_top >= 90){
            $('header').addClass('header_active')
        }
        if(s_top <= 5) {
            $('header').removeClass('header_active')
        }
    }
})


// url에서 특정정보
function get_url_info(key) {
    // 1) url에 있는 문자열 가져오기
    let url = location.href; // product.html?xcode=044&cate_no=0&genre=men

    // 2) ? 뒤에꺼만(정보) 잘라내기
    url = url.split("?"); // [product.html , xcode=044&cate_no=0&genre=men]

    if(url.length > 1) {

        url = url[1]; // xcode=044&cate_no=0&genre=men

        // 3) &(정보별)로 나누기
        url = url.split("&"); // [xcode=044  ,  cate_no=0#review  ,  genre=men]
        
// console.log(url)
        
        // 4) 각 방마다 'cate_no' 있는지 체크
        for(let i=0; i<url.length; i++) {

            // a 태그 눌러서 #이 별도로 생기면
            if(url[i].indexOf("#") > -1) {    // cate_no=0#review
                url[i] = url[i].split("#")[0]; // [cate_no=0  ,  review]
            }
            
            let tmp_url = url[i].split("=") // i:0 =>[xcode , 044]
                                            // i:1 =>[cate_no , 0]
            if(tmp_url[0] == key) {
                // 5) 있으면 'cate_no'의 실제값 return 해주기
                return tmp_url[1];
            }
        }
        return -1;
    }
    else {
        return -1;
    }
}

// 햄버거 버튼
// let ham_chk = true;
$('.ham_btn').click(function(){
    $('.panbox').addClass('panbox_active')
})
$('.close_btn').click(function(){
    $('.panbox').removeClass('panbox_active')
})


let pan_chk = true;
$('.panbox_bot > ul > li').click(function(){
    if(pan_chk){
        $(this).find('.pan_inner').addClass('pan_inner_active')
        pan_chk = false;
    }
    else {
        $(this).find('.pan_inner').removeClass('pan_inner_active')
        pan_chk = true;
    }
})

// top 버튼 //////////////////////////////////////////////////////////////////
let top_load = `<div class="top"><a href="#">TOP</a></div>`
$('.wrap').prepend(top_load)
