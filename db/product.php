<?php 
    include 'db_conn.php';

    $cate = $_GET['__cate']; //new
    
    $sql = "select * from member_eunji where category = '".$cate."'"; 
    $result = mysqli_query($conn, $sql);


    while($row = mysqli_fetch_array($result)) {
        $data[] = array(
            "item_no" => $row['item_no'],
            "category" => $row['category'],
            "title" => $row['title'],
            "o_price" => $row['o_price'],
            "s_price" => $row['s_price'],
            "detail" => $row['detail'],
            "color" => $row['color'],
            "color_val" => $row['color_val'],
            "size" => $row['size'],
            "src" => $row['src']
        );
    }

 
    mysqli_close($conn);
    echo json_encode($data); // JS에 data 라는 박스 넘겨주기
?>