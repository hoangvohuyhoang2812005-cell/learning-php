<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Tài liệu học Lập Trình Web</title>
</head>
<body>

    <h1>Tài liệu học Lập Trình Web</h1>

    <?php
        echo "<hr>";
    ?>

    <p>Tài liệu học HTML</p>
    <p>Tài liệu học CSS</p>

    <?php
        echo "<h2>Tài liệu học JavaScript</h2>";
        echo "<h3>Tài liệu học MySQL</h3>";
        echo "<h4>Tài liệu học PHP</h4>";
    ?>

    <hr>

    <?php
        $text = "Từ cơ bản" . " " . "đến nâng cao";
        echo $text;
    ?>

    <?php
        $a = 1;
        $b = 2;

        function Sum(){
            global $a, $b;   
            $b = $a + $b;
        }

        Sum();
        echo $b;      
    ?>

    <?php
        $name = "Nguyễn Minh Đức";
        $year = 2000;
        $city = "Hà Nội";

        echo "<p>Giá trị của biến name là chuỗi: $name</p>";
        echo "<p>Giá trị của biến year là số: $year</p>";
        echo "<p>Giá trị của biến city là chuỗi: $city</p>";
    ?>

    <?php
        define("PI", 3.14);
        echo "Giá trị của hằng số PI là: " . PI;
    ?>

    <?php
        echo "<h1> Tiêu đề lớn</h1>";
        echo "<p style ='color:red' >Dòng chữ này có màu gì</p>";
    ?>

    <?php
        for ($i = 1; $i <= 10; $i++) {
            if ($i == 5) {
                break; 
            }
            echo " $i<br>";
        }
    ?>

    <?php
        for ($i = 1; $i <= 5; $i++) {
            if ($i == 3) {
                continue; // bỏ qua vòng lặp hiện tại và sang vòng tiếp theo
            }
            echo "Giá trị của i bo qua 3 la: $i<br>";
        }
    ?>

</body>
</html>