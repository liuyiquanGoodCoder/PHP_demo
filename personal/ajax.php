<?php
$myfile = fopen("answer.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("answer.txt"));
?>
