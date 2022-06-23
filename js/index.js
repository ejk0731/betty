$(document).ready(function(){


//sub_banner 이미지 효과(위에 겹쳐진 판이 왼쪽에서 오른쪽으로 사라짐)
$(window).scroll(function(){
    let s_b_top = $('.subbanner').offset().top;
    let s_top = $(window).scrollTop();

    // console.log(s_b_top, s_top)
    if(s_top > s_b_top - 500){
        $('.s_b_imgbox').addClass('s_b_imgbox_ani')
        $('.s_b_imgbox2').addClass('s_b_imgbox2_ani')
    }
})

// new arrival item 불러오기 /////////////////////////////////////////////////////////////////////
// let cate = get_url_info("cate");

index_load('new', 'n_a_ul')
index_load('outer', 'o_ul')


function index_load(word, loca) {

    let cate = `${word}`;
    // console.log(cate)
    
    $.ajax({
        url: "./db/product.php",
        data: { __cate:cate},
        type: 'GET',
        dataType: "json",
        success: function(data) {
            // db 잘 다녀왔을때
    
            // console.log(data)
    
    
            for(let i=0; i<9; i++){
                let n_a_item = `<li>
                                    <div class="n_itembox">
                                        <a href="./detail.html?cate=${cate}&item_no=${data[i].item_no}">
                                            <div class="n_thumb">
                                                <img class="new_arrival_img" src="./img/${cate}/${data[i].src}" alt="${word}_arrival_img">
                                            </div>
                                            <div class="n_desc">
                                                <div class="n_desc_wrap">
                                                <div class="n_color_box"></div>
                                                <h3 class="n_title">${data[i].title}</h3>
                                                <div class="n_price price_line">KRW<span class="n_o_price">${data[i].o_price}</span></div>
                                                <div class="n_price">KRW<span class="n_s_price">${data[i].s_price}</span></div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>`;
                $(`.${loca}`).append(n_a_item)
                // console.log(133333)
    
                let color_val = data[i].color_val.split(',')
                for(let j=0; j<color_val.length; j++) {
                    // console.log(color_val.split(','))
                    $(`.${loca}`).children('li').eq(i).find('.n_color_box').append(`<span class="color" style="background:${color_val[j]}"></span>`)
                    // $('.cate_ul').children('li').eq(i).css({opacity: '0.2'})
                }
    
            }
    
        },
    
    
    
    
        error: function(){ 
            // db 못 다녀왔을때
        }
    })
}



// lookbook /////////////////////////////////////////////////////////////////////////////////

// lookbook 스크롤 닿으면 글씨,사진박스 op:0 -1로 바뀌고 위로 올라오기
$(window).scroll(function(){
    let l_b_top = $('#look').offset().top;
    // console.log(l_b_top)
    let s_top = $(window).scrollTop();

    if(s_top > l_b_top - 500) {
        // console.log(s_top)
        // console.log(111111)
        $('.l_b_txt').addClass('l_b_active')
        setTimeout(function(){
            $('.l_b_btn').addClass('l_b_active')
        }, 100)
        setTimeout(function(){
            $('.l_b_itembox').addClass('l_b_active')
        }, 200)
    }
})


    
    let lb_c_index = 0;
    let lb_timer = 1000;
    let lb_length = $('.l_b_item').length;
    let lb_item_width = $('.l_b_item').eq(0).outerWidth();
    let last_item_pos = 0;
    
    // console.log(lb_length)
    // console.log(document.body.clientWidth);

    ////////////////////
    for(let i=0; i<lb_length; i++) {
        $('.l_b_item').eq(i).css({
            position: 'absolute',
            left: lb_item_width * i
        })
        last_item_pos = lb_item_width * i
        // console.log("i: " + lb_item_width * i)
    }
    ///////////////////

$(window).resize(function(){
    lb_item_width = $('.l_b_item').eq(0).outerWidth();
    last_item_pos = 0;
    lb_c_index = 0;

    ////////////////////
    for(let i=0; i<lb_length; i++) {
        $('.l_b_item').eq(i).css({
            position: 'absolute',
            left: lb_item_width * i
        })
        last_item_pos = lb_item_width * i
        // console.log("i: " + lb_item_width * i)
    }
    ///////////////////
});

$(document).on('click', '.btn_next', function(){
    // 버튼막기
    $('.btn').css({pointerEvents: 'none'})
    setTimeout(function(){
        $('.btn').css({pointerEvents: 'all'})
    }, lb_timer)
      
    // 모든 방 움직이기
    $('.l_b_item').animate({
        left: `-=${lb_item_width}`
    }, lb_timer, 'linear')
    // 호버
    $('.l_b_desc').removeClass('l_b_desc_active')
    if(document.body.clientWidth <= 990) {
        // console.log((lb_c_index + 2) % lb_length)
        $('.l_b_item').eq((lb_c_index + 2) % lb_length).find('.l_b_desc').addClass('l_b_desc_active')
    }
    else {
        $('.l_b_item').eq((lb_c_index + 3) % lb_length).find('.l_b_desc').addClass('l_b_desc_active')
    }
    // 나간 방 박스 맨 끝으로 이동
    $('.l_b_item').eq(lb_c_index % lb_length).animate({
        left: last_item_pos
    }, 0)

    lb_c_index+=1;
})

$(document).on('click', '.btn_prev', function(){
    //버튼막기
    $('.btn').css({pointerEvents: 'none'})
    setTimeout(function(){
        $('.btn').css({pointerEvents: 'all'})
    }, lb_timer)

    lb_c_index-=1;
    // 나간 방 박스 앞쪽 끝으로 이동
    $('.l_b_item').eq(lb_c_index % lb_length).animate({
        left: -lb_item_width
    }, 0)
    // 모든 방 움직이기
    $('.l_b_item').animate({
        left: `+=${lb_item_width}`
    }, lb_timer, 'linear')
    // 호버
    $('.l_b_desc').removeClass('l_b_desc_active')
    if(document.body.clientWidth <= 990) {
        $('.l_b_item').eq((lb_c_index + 1) % lb_length).find('.l_b_desc').addClass('l_b_desc_active')
    }
    else {
        $('.l_b_item').eq((lb_c_index + 2) % lb_length).find('.l_b_desc').addClass('l_b_desc_active')
    }
    
    
})


// 자동 슬라이드
let int_box = "";
function auto_slide(){
    int_box = setInterval(function(){
        $('.btn_next').trigger('click')
    }, lb_timer + 1000)
    
} 
auto_slide()

// 처음에 나올때 가운데 박스 호버 효과 걸어주기
if(screen.width <= 990) {
    $('.l_b_item').eq(1).find('.l_b_desc').addClass('l_b_desc_active')
}
else {
    $('.l_b_item').eq(2).find('.l_b_desc').addClass('l_b_desc_active')
}

$('.l_b_itembox, .btn').hover(function(){
    clearInterval(int_box)
}, function(){
    auto_slide()
})



})
