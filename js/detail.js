let cate = get_url_info("cate");
let i_no = get_url_info("item_no");

console.log(cate, i_no)


$.ajax({
    url: "./db/product.php",
    data: { __cate:cate},
    type: 'GET',
    dataType: "json",
    success: function(data) {
        // db 잘 다녀왔을때

        console.log(data)

        // headcate 카테고리 이름 찍어주기 
        let page_title = ""
        if(cate == "new") { page_title = "New Arrivals"}
        else if (cate == "outer") { page_title = "Outerwear"}
        else if (cate == "top") { page_title = "Top"}
        else if (cate == "bottom") { page_title = "Bottom"}
        else if (cate == "dress") { page_title = "Dress"}
        else if (cate == "acc") { page_title = "Accessories"};
        // console.log(page_title)

// 이미지와 정보 불러오기 //////////////////////////////////////////////////////////////////

        let d_imgbox = `<div class="d_imgbox">
                            <img src="./img/${cate}/${data[i_no - 1].src}" alt="d_img">
                        </div>`
        $('.d_img_wrap').append(d_imgbox)
        
        // 랜덤으로 이미지 5개 더 찍기
        let b_rand = [];

        while(b_rand.length < 5) {
            let rand = Math.random(); // 0.00 ~ 0.99 => 0~99

            rand = Math.floor(((rand * 100 % 12)));
            if(b_rand.indexOf(rand) == -1 && b_rand.indexOf(rand) != i_no - 1) { // rand랑 같은게 없다
        // console.log(rand)
                b_rand.push(rand);

                d_imgbox = `<div class="d_imgbox">
                                <img src="./img/${cate}/${data[rand].src}" alt="d_img">
                            </div>`
                                
                $('.d_img_wrap').append(d_imgbox)
            }
        }
        // desc_box 정보 불러오기
        $('.headcate').append(`<li><a href="./product.html?cate=${cate}">${page_title}</a></li>`)
        $('.d_title').text(data[i_no - 1].title)
        $('.n_o_price').text(data[i_no - 1].o_price)
        $('.n_s_price').text(data[i_no - 1].s_price)
        let o_p = data[i_no - 1].o_price;
        let s_p = data[i_no - 1].s_price;
        let per = (((o_p - s_p) / o_p) * 100).toFixed(0);
        $('.per').text(per)

        // d_opt 정보 불러오기
        // color
        let color = data[i_no - 1].color.split(',');
        let color_val = data[i_no - 1].color_val.split(',');
        for(let j=0; j<color_val.length; j++) {
            // console.log(color_val.split(','))
            $('.d_color_box').append(`<div class="d_color" style="background:${color_val[j]}"><span>${color[j]}</span></div>`)
            // $('.cate_ul').children('li').eq(i).css({opacity: '0.2'})
        }

        // size
        let size = data[i_no - 1].size.split(',');
        for(let j=0; j<size.length; j++) {
            // console.log(size.split(','))
            $('.d_size_box').append(`<div class="d_size">${size[j]}</div>`)
        }

        // final_price


// 컬러, 사이즈 선택 시 선택 옵션 info 불러오기 ///////////////////////////////////////////////////

        let cur_color = "";
        let cur_size = "";
        let cho_array = [cur_color, cur_size];

        $('.d_color').click(function(){
            cur_color = $(this).find('span').text();
            cho_array = [cur_color, cur_size];
            if(cur_size != "" ){
                load_opt()
            }
            // console.log(cho_array)
            
        })
        
        $('.d_size').click(function(){
            cur_size = $(this).text();
            cho_array = [cur_color, cur_size];
            
            // console.log(cho_array)
            if(cur_color == ""){
                alert('색상을 선택하세요')
            }
            else {
                load_opt()
            }
        });
        
        // 선택 옵션 박스 불러오는 함수
        function load_opt() {

            // 이미 있는 박스중에 같은 옵션 있는지 확인
            let cho_chk = true;
            for(let i=0; i<$('.hidden_index').length; i++){
                cho_chk = true;
                if($('.hidden_index').eq(i).val() == cho_array) {
                    alert('이미 선택한 상품입니다.')
                    cho_chk = false;
                    cur_color = "";
                    cur_size = "";
                }
            }
            // 같은 옵션 없으면 새로 박스 추가하기
  
            if(cho_chk) {
                let ch_opt =`<tr class="ch_opt">
                                <td class="product_info">
                                    <span>${data[i_no - 1].title}</span><br>-<span>${cur_color}</span>/<span>${cur_size}</span>  
                                </td>
                                <td class="product_qty">
                                    <div class="qty_wrap">
                                        <input type="text" value="1" class="qty_val">
                                        
                                        <img class="count count_up" src="./img/btn_count_up.gif" alt="btn_count_up">
                                        <img class="count count_down" src="./img/btn_count_down.gif" alt="btn_count_down">
                                        <img class="count btn_close" src="./img/btn_price_delete.gif" alt="btn_price_delete">
                                        
                                        <input type="text" class="hidden_index" value="${cho_array}">
                                    </div>
                                </td>
                                <td class="product_price">KRW <span class="total_price">${Number(data[i_no - 1].s_price).toLocaleString('ko-KR')}</span></td>
                            </tr>`

console.log(typeof((data[i_no - 1].s_price)))
console.log("11111: " + Number(data[i_no - 1].s_price).toLocaleString('ko-KR'));                            
                $('.choose').append(ch_opt)
                final_price()

                cur_color = "";
                cur_size = "";
                console.log(cho_array)
            }
        }

// 옵션 박스 수량, 금액 바꿔주기 ////////////////////////////////////////////////////////////////////
        
        // 수량 바꿔주기
        let qty_val = ""
        $(document).on('click', '.count_up', function(){
            qty_val = Number($(this).prev('.qty_val').val()) + 1;
            $(this).prev('.qty_val').val(qty_val)
            
            total_price()
            final_price()
        })

        $(document).on('click', '.count_down', function(){
            qty_val = Number($(this).prev().prev('.qty_val').val()) - 1;
            console.log(qty_val)
            if(qty_val < 1){
                alert('최소수량은 1개 입니다.')
            }
            else {
                $(this).prev().prev('.qty_val').val(qty_val)
               
                total_price()
                final_price()
            }
        })
        // btn_close 누르면 박스 없애기
        $(document).on('click', '.btn_close', function(){
            $(this).parent().parent().parent().remove()
            final_price()
        })

        function total_price() {
            let total_price = "";
            total_price += Number($('.qty_val').eq().val()) * Number(qty_val * data[i_no - 1].s_price);
            $(this).parent().parent().next().children('.total_price').text(comma(total_price))
            // console.log(25555554444666664)
        }

        
        // 총 금액, 수량 구하기
        function final_price() {
            let final_price = 0;
            let total_qty = 0;
            for(let i=0; i<$('.qty_val').length; i++){
                final_price += Number($('.qty_val').eq(i).val()) * Number(data[i_no - 1].s_price);
                total_qty += Number($('.qty_val').eq(i).val());
                // toLocaleString(국가코드) 천단위마다 , 찍기
                $('.final_price').text(comma(final_price))
                $('.total_qty').text(total_qty)
            }
        }
        
        // 천단위 콤마 찍기
        function comma(num) {
console.log("num: " + num)            
            return num.toLocaleString('ko-KR')
        }



        // 스크롤 내려서 이미지 끝나면 desc fixed 풀기
        // let img_bot = $('.d_img_wrap').offset().top + $('.d_img_wrap').outerHeight();
        // $(window).scroll(function(){
        //     let s_top = $(window).scrollTop();
        //     if(s_top )
        // })

        

    },
    error: function(){ 
        // db 못 다녀왔을때
    }
})


// desc tap 기능
// $('.d_tap > ul > li').eq(0).trigger('click')

$('.d_tap > ul > li').click(function(){
    console.log($(this).index())
    $('.tap').removeClass('tap_active')
    $('.d_tap > ul > li').removeClass('tap_li_active')
    $('.d_tap > ul > li').eq($(this).index()).addClass('tap_li_active')
    $('.tap').eq($(this).index()).addClass('tap_active')
       
})
    
