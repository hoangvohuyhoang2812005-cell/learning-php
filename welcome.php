<?php
    session_start();
    if (!isset($_SESSION['username'])){
        header("Location : login.php");
        exit();
    } 
    $username = $_SESSION["username"];
        
        
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Xin chao, <?php echo htmlspecialchars($username) ?></h1>
        <form method="post" action="logout.php">
        <button type="submit">Đăng xuất</button>
        </form>
    </body>
    </html>