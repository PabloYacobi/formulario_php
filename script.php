<?php

$_GET["username"];
$_GET["password"];
if($_GET["username"]=="Pablo"&& $_GET["password"]=="Yacobi"){
    echo("Entry, please");
}
    else{
        //echo("The username and password are incorrect");
        header("Location:https://google.com");
    }

