// drop table member_eunji;

// update test_member set color="" ,color_val="#d7b170,#501704,#56754c,#000082,#ffffff" where seqno=1;

// create table member_eunji (
//     seqno int(10) unsigned not null auto_increment, 
//     item_no varchar(255) not null, 
//     category varchar(255) not null,
//     title varchar(255) not null,
//     o_price int(10) not null,
//     s_price int(10) not null,
//     detail longtext not null,
//     color varchar(255) not null,
//     color_val varchar(255) not null,
//     size varchar(255) not null,
//     src varchar(255) not null,
//     primary key(seqno)
// );

// select * from member_eunji;


// //     d_desc longtext not null, 

//     insert into member_eunji value ('', '1', 'new', 'title1', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '1.jpg');
//     insert into member_eunji value ('', '2', 'new', 'title2', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '2.jpg');
//     insert into member_eunji value ('', '3', 'new', 'title3', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '3.jpg');
//     insert into member_eunji value ('', '4', 'new', 'title4', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '4.jpg');
//     insert into member_eunji value ('', '5', 'new', 'title5', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '5.jpg');
//     insert into member_eunji value ('', '6', 'new', 'title6', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '6.jpg');
//     insert into member_eunji value ('', '7', 'new', 'title7', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '7.jpg');
//     insert into member_eunji value ('', '8', 'new', 'title8', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '8.jpg');
//     insert into member_eunji value ('', '9', 'new', 'title9', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '9.jpg');
//     insert into member_eunji value ('', '10', 'new', 'title10', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '10.jpg');
//     insert into member_eunji value ('', '11', 'new', 'title11', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '11.jpg');
//     insert into member_eunji value ('', '12', 'new', 'title12', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '12.jpg');

//     insert into member_eunji value ('', '1', 'outer', 'title1', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '1.jpg');
//     insert into member_eunji value ('', '2', 'outer', 'title2', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '2.jpg');
//     insert into member_eunji value ('', '3', 'outer', 'title3', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '3.jpg');
//     insert into member_eunji value ('', '4', 'outer', 'title4', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '4.jpg');
//     insert into member_eunji value ('', '5', 'outer', 'title5', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '5.jpg');
//     insert into member_eunji value ('', '6', 'outer', 'title6', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '6.jpg');
//     insert into member_eunji value ('', '7', 'outer', 'title7', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '7.jpg');
//     insert into member_eunji value ('', '8', 'outer', 'title8', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '8.jpg');
//     insert into member_eunji value ('', '9', 'outer', 'title9', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '9.jpg');
//     insert into member_eunji value ('', '10', 'outer', 'title10', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '10.jpg');
//     insert into member_eunji value ('', '11', 'outer', 'title11', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '11.jpg');
//     insert into member_eunji value ('', '12', 'outer', 'title12', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '12.jpg');

//     insert into member_eunji value ('', '1', 'top', 'title1', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '1.jpg');
//     insert into member_eunji value ('', '2', 'top', 'title2', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '2.jpg');
//     insert into member_eunji value ('', '3', 'top', 'title3', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '3.jpg');
//     insert into member_eunji value ('', '4', 'top', 'title4', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '4.jpg');
//     insert into member_eunji value ('', '5', 'top', 'title5', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '5.jpg');
//     insert into member_eunji value ('', '6', 'top', 'title6', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '6.jpg');
//     insert into member_eunji value ('', '7', 'top', 'title7', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '7.jpg');
//     insert into member_eunji value ('', '8', 'top', 'title8', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '8.jpg');
//     insert into member_eunji value ('', '9', 'top', 'title9', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '9.jpg');
//     insert into member_eunji value ('', '10', 'top', 'title10', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '10.jpg');
//     insert into member_eunji value ('', '11', 'top', 'title11', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '11.jpg');
//     insert into member_eunji value ('', '12', 'top', 'title12', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '12.jpg');

//     insert into member_eunji value ('', '1', 'bottom', 'title1', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '1.jpg');
//     insert into member_eunji value ('', '2', 'bottom', 'title2', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '2.jpg');
//     insert into member_eunji value ('', '3', 'bottom', 'title3', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '3.jpg');
//     insert into member_eunji value ('', '4', 'bottom', 'title4', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '4.jpg');
//     insert into member_eunji value ('', '5', 'bottom', 'title5', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '5.jpg');
//     insert into member_eunji value ('', '6', 'bottom', 'title6', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '6.jpg');
//     insert into member_eunji value ('', '7', 'bottom', 'title7', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '7.jpg');
//     insert into member_eunji value ('', '8', 'bottom', 'title8', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '8.jpg');
//     insert into member_eunji value ('', '9', 'bottom', 'title9', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '9.jpg');
//     insert into member_eunji value ('', '10', 'bottom', 'title10', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '10.jpg');
//     insert into member_eunji value ('', '11', 'bottom', 'title11', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '11.jpg');
//     insert into member_eunji value ('', '12', 'bottom', 'title12', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '12.jpg');

//     insert into member_eunji value ('', '1', 'dress', 'title1', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '1.jpg');
//     insert into member_eunji value ('', '2', 'dress', 'title2', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '2.jpg');
//     insert into member_eunji value ('', '3', 'dress', 'title3', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '3.jpg');
//     insert into member_eunji value ('', '4', 'dress', 'title4', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '4.jpg');
//     insert into member_eunji value ('', '5', 'dress', 'title5', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '5.jpg');
//     insert into member_eunji value ('', '6', 'dress', 'title6', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '6.jpg');
//     insert into member_eunji value ('', '7', 'dress', 'title7', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '7.jpg');
//     insert into member_eunji value ('', '8', 'dress', 'title8', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '8.jpg');
//     insert into member_eunji value ('', '9', 'dress', 'title9', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '9.jpg');
//     insert into member_eunji value ('', '10', 'dress', 'title10', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '10.jpg');
//     insert into member_eunji value ('', '11', 'dress', 'title11', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '11.jpg');
//     insert into member_eunji value ('', '12', 'dress', 'title12', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '12.jpg');

//     insert into member_eunji value ('', '1', 'acc', 'title1', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '1.jpg');
//     insert into member_eunji value ('', '2', 'acc', 'title2', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '2.jpg');
//     insert into member_eunji value ('', '3', 'acc', 'title3', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '3.jpg');
//     insert into member_eunji value ('', '4', 'acc', 'title4', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '4.jpg');
//     insert into member_eunji value ('', '5', 'acc', 'title5', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '5.jpg');
//     insert into member_eunji value ('', '6', 'acc', 'title6', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '6.jpg');
//     insert into member_eunji value ('', '7', 'acc', 'title7', 56000, 50000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '7.jpg');
//     insert into member_eunji value ('', '8', 'acc', 'title8', 45000, 41000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '8.jpg');
//     insert into member_eunji value ('', '9', 'acc', 'title9', 78000, 75000, '상품 간단 설명', '베이지, 브라운, 카키, 네이비, 화이트', '#d7b170,#501704,#56754c,#000082,#ffffff', 'S, L, XL', '9.jpg');
//     insert into member_eunji value ('', '10', 'acc', 'title10', 56000, 50000, '상품 간단 설명', '브라운, 카키, 화이트', '#501704,#56754c,#ffffff', 'S, L, XL', '10.jpg');
//     insert into member_eunji value ('', '11', 'acc', 'title11', 45000, 41000, '상품 간단 설명', '베이지, 카키, 화이트', '#d7b170,#56754c,#ffffff', 'S, L, XL', '11.jpg');
//     insert into member_eunji value ('', '12', 'acc', 'title12', 78000, 75000, '상품 간단 설명', '브라운, 카키, 네이비', '#501704,#56754c,#000082', 'S, L, XL', '12.jpg');
