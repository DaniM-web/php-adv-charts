<?php
require 'database.php';

header('Content-Type: application/json');

$dataObj = $graphs['fatturato_by_agent']['data'];
$dataValue = [];
$dataKeys = [];

foreach ( $dataObj as $key => $value) {
  $dataValue[] = $value;
  $dataKeys[] = $key;
}

$res = [
  'd1' => [
    'type' => 'line',
    'data' => [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]
    ],

    'd2' =>[
      'type' => 'pie',
      'data' => $dataValue,
      'labels' => $dataKeys
    ]
];

echo json_encode($res);
 ?>
