//sub_banner 이미지 효과(위에 겹쳐진 판이 왼쪽에서 오른쪽으로 사라짐)
let s_b_top = $('.subbanner').offset().top;
$(window).scroll(function(){
    let s_top = $(window).scrollTop();

    if(s_top > s_b_top - 600){
        // console.log(1313)
        $('.s_b_imgbox').addClass('s_b_imgbox_ani')
        $('.s_b_imgbox2').addClass('s_b_imgbox2_ani')
    }
})

// new arrival item 불러오기

for(let i=1; i<10; i++){
    let n_a_item = `<li>
                        <div class="n_itembox">
                            <div class="n_thumb">
                                <a href="#">
                                    <img class="new_arrival_img" src="./img/new/${i}.jpg" alt="new_arrival_img">
                                </a>
                            </div>
                            <div class="n_desc">
                                <div class="n_desc_wrap">
                                    <div class="n_color_box">
                                        <span class="color color1"></span>
                                        <span class="color color2"></span>
                                        <span class="color color3"></span>
                                        <span class="color color4"></span>
                                        <span class="color color5"></span>
                                    </div>
                                    <h3 class="n_title"><a href="#">Sample Product</a></h3>
                                    <div class="n_price price_line">KRW<span class="n_o_price">110000</span></div>
                                    <div class="n_price">KRW<span class="n_s_price">90000</span></div>
                                </div>
                            </div>
                        </div>
                    </li>`;
    $('.n_a_ul').append(n_a_item)
}

// lookbook 스크롤 닿으면 글씨,사진박스 op:0 -1로 바뀌고 위로 올라오기
// let l_b_top = $('.lookbook').offset().top;
// $(window).scroll(function(){
//     let s_top = $(window).scrollTop();

//     if(s_top > l_b_top - 500) {
//         $('.l_b_btn').addClass('l_b_active')
//     }
// })
// lookbook item 한칸슬라이드
// for(let i=0; i<lb_length; i++){
    //     $('.l_b_item').eq(i).css({left: lb_item_width * i})
    // }

    
    let lb_c_index = 0;
    let lb_timer = 1000;
    
    let lb_length = $('.l_b_item').length;

    let lb_item_width = $('.l_b_item').eq(0).outerWidth();
    // console.log(lb_item_width)
    let last_item_pos = 0;
    // console.log(last_item_pos);

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
    // last_item_pos = $('.l_b_item').last().position().left;    

    // console.log(last_item_pos)
    // 모든 방 움직이기
    $('.l_b_item').animate({
        left: `-=${lb_item_width}`
    }, lb_timer, 'linear')
    // 나간 방 박스 맨 끝으로 이동
    $('.l_b_item').eq(lb_c_index % lb_length).animate({
        left: last_item_pos
    }, 0)

    // 호버
    $('.l_b_desc').removeClass('l_b_desc_active')
    $('.l_b_item').eq((lb_c_index + 2)  % lb_length).find('.l_b_desc').addClass('l_b_desc_active')
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

    
})


let int_box = "";
function auto_slide(){
    int_box = setInterval(function(){
        $('.btn_next').trigger('click')
        // removeClass해주고
        $('.l_b_desc').removeClass('l_b_desc_active')
        $('.l_b_item').eq((lb_c_index + 2)  % lb_length).find('.l_b_desc').addClass('l_b_desc_active')
    }, 3000)

} 
auto_slide()

$('.l_b_itembox, .btn').hover(function(){
    clearInterval(int_box)
}, function(){
    auto_slide()
})