<?php

$ch = curl_init("https://api.challonge.com/v1/tournaments/10196742/participants/?$_GET['player_id'].json?api_key=GvVbQqBKqNrZABt4KTZUgVZjGZ3IllXkSsY6Dzfb");

curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$output = curl_exec($ch);      

curl_close($ch);
echo $output;

?>