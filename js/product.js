let cate = get_url_info("cate");

console.log(cate)


$.ajax({
    url: "./db/product.php",
    data: { __cate:cate},
    type: 'GET',
    dataType: "json",
    success: function(data) {
        // db 잘 다녀왔을때

        console.log(data)

        // sub_nav 카테고리 이름 찍어주기 
        let page_title = ""
        if(cate == "new") { page_title = "New Arrivals"}
        else if (cate == "outer") { page_title = "Outerwear"}
        else if (cate == "top") { page_title = "Top"}
        else if (cate == "bottom") { page_title = "Bottom"}
        else if (cate == "dress") { page_title = "Dress"}
        else if (cate == "acc") { page_title = "Accessories"};
        // console.log(page_title)
        $('.sub_nav').prepend(`<h2>${page_title}</h2>`)


        // best4 ////////////////////////////////////////////////////////
        // 랜덤뽑기 4개
        let b_rand = [];

        while(b_rand.length < 4) {
            let rand = Math.random(); // 0.00 ~ 0.99 => 0~99

            rand = Math.floor(((rand * 100 % 12)));
            if(b_rand.indexOf(rand) == -1) { // rand랑 같은게 없다
// console.log(rand)
                b_rand.push(rand);

            // 아이템 불러오기
                let b_item =    `<li>
                                    <div class="b_itembox">
                                        <a href="./detail.html?cate=${cate}&item_no=${data[rand].item_no}" class="b_itembox_a">
                                            <span class="best_num">Best 0${b_rand.length }.</span>
                                            <div class="n_thumb">
                                                <img class="best4_img" src="./img/${cate}/${data[rand].src}" alt="best_img">
                                            </div>
                                            <div class="n_desc">
                                                <div class="n_desc_wrap">
                                                    <div class="n_color_box"></div>
                                                    <h3 class="n_title">${data[rand].title}</h3>
                                                    <div class="n_price price_line">KRW<span class="n_o_price">${data[rand].o_price}</span></div>
                                                    <div class="n_price">KRW<span class="n_s_price">${data[rand].s_price}</span></div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>`;
                $('.best_ul').append(b_item)

                // "#d7b170,#501704,#56754c,#000082,#ffffff"
                let color_val = data[rand].color_val.split(',')
                for(let j=0; j<color_val.length; j++) {
                    // console.log(color_val.split(','))
                    $('.best_ul').children('li').eq(b_rand.length-1).find('.n_color_box').append(`<span class="color" style="background:${color_val[j]}"></span>`)
                    // $('.cate_ul').children('li').eq(i).css({opacity: '0.2'})
                }
            }
            // console.log(rand, b_rand)
            
        }
        


        // category_item //////////////////////////////////////////////////
        // 아이템 불러오기
        for(let i=0; i<data.length; i++){
            let cate_item =`<li>
                                <div class="cate_itembox">
                                    <div class="cate_thumb">
                                        <a href="./detail.html?cate=${cate}&item_no=${data[i].item_no}">
                                            <img class="cate_item_img" src="./img/${cate}/${data[i].src}" alt="cate_item_img">
                                        </a>
                                    </div>
                                </div>
                                <div class="cate_desc">
                                    <div class="cate_desc_wrap">
                                        <div class="cate_color_box"></div>
                                        <h3 class="cate_title"><a href="./detail.html">${data[i].title}</a></h3>
                                        <div class="n_price price_line">KRW<span class="n_o_price">${data[i].o_price}</span></div>
                                        <div class="n_price">KRW<span class="n_s_price">${data[i].s_price}</span></div>
                                    </div>
                                </div>
                            </li>`;
            $('.cate_ul').append(cate_item)


            // "#d7b170,#501704,#56754c,#000082,#ffffff"
            let color_val = data[i].color_val.split(',')
            for(let j=0; j<color_val.length; j++) {
                // console.log(color_val.split(','))
                $('.cate_ul').children('li').eq(i).find('.cate_color_box').append(`<span class="color" style="background:${color_val[j]}"></span>`)
                // $('.cate_ul').children('li').eq(i).css({opacity: '0.2'})
            }
        }
    },
    error: function(){ 
        // db 못 다녀왔을때
    }
})



