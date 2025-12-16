<?php
    if (isset($_GET["search"])){
        echo"tu khoa" . htmlspecialchars(string:$_GET["search"]);
    }        
 ?> 