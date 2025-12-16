<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <H1> Tài liệu học Lập Trình </H1>
    <?php
        echo "<hr>"
    ?>
    <p>tài liệu học html</p>
    <p>tài liệu học css</p>
    <?php
    echo "<h2>tài liệu học javascript</h2>";
    echo "<h3>tài liệu học mysql</h3>";
    echo "<h4>tài liệu học php</h4>"
    ?>
    <hr>
    <?php
    $text = "từ cơ bản" . " " . "đến nâng cao";
    echo $text;
    $a = 1;
    $b = 2;
    function sum(){
        global $a, $b;
        $b = $a + $b;
    }
    sum();
    echo $b;
    echo "xin chao, php!";
    ?>
</body>
</html>