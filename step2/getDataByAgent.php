<?php
require 'database.php';

header('Content-Type: application/json');

$res = [
  'type' => $graphs['fatturato_by_agent']['type']
];

$dataObj = $graphs['fatturato_by_agent']['data'];

$dataValue = [];
$dataKeys = [];

foreach ( $dataObj as $key => $value) {
  $dataValue[] = $value;
  $dataKeys[] = $key;
};

$res['labels'] = $dataKeys;
$res['data'] = $dataValue;

echo json_encode($res);
