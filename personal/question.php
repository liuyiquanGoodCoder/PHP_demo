<?php
$file_path = "question.txt";
$fp = fopen($file_path,"r");
$myfile = fread($fp,filesize($file_path));
$pieces = explode("\n", $myfile);
//$obj = str_split($myfile,3);
$json=urldecode(json_encode($pieces));
echo $json;
?>
