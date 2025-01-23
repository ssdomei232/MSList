<?php
$f = isset($_GET['f']) ? str_replace("//", "/", $_GET['f']) : ''; 

if (empty($f)) {
    include('config.php');
    include('pages/home.php');
} else {
    include('config.php');
    include('pages/function.php');
    include('pages/site_name.php');
    include('pages/header.php');
    include('pages/file.php');
}
?>