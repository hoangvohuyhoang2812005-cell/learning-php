<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Dãy số từ 1 đến 100</title>
</head>
<body>
<?php
for ($i = 1; $i <= 100; $i++) {
    if ($i % 2 == 0) {
        // số chẵn: in đậm, màu đỏ
        echo "<span style='font-weight: bold; color: red;'>$i</span> ";
    } else {
        // số lẻ: in đậm, nghiêng, màu xanh
        echo "<span style='font-weight: bold; font-style: italic; color: green;'>$i</span> ";
    }
}
?>
</body>
</html>