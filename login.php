<?php
    session_start();
    if (isset($_POST["username"])){
        $_SESSION["username"] = $_POST["username"];
        header(header:"Location: welcome.php");
        exit();
    } 
        
        
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form method="post">
            <label for="Nhập tên"></label>
            <input type="text" name="username" required > <br><br>
            <button type="submit">Đăng nhập</button>
        </form>
    </body>
    </html>