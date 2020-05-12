<?php
require 'database.php';
header('Content-Type: application/json');

$d2Array = $graphs['fatturato_by_agent']['data'];
$d2Labels = [];
$d2DataValues = [];

foreach ($d2Array as $key => $value) {
  $d2Labels[] = $key;
  $d2DataValues[] = $value;
};

$d3Array = $graphs['team_efficiency']['data'];
$d3Labels = [];
$d3DataValues = [];
foreach ($d3Array as $key => $value) {
  $d3Labels[] = $key;
  $d3DataValues[] = $value;

}


$req = [
  'd1' => [
    'type' => $graphs['fatturato']['type'],
    'data' => [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322],
    'access' => $graphs['fatturato']['access']
  ],
  'd2' => [
    'type' => $graphs['fatturato_by_agent']['type'],
    'labels' => $d2Labels,
    'data' => $d2DataValues,
    'access' => $graphs['fatturato_by_agent']['access']
  ],
  'd3' => [
    'type' => $graphs['team_efficiency']['type'],
    'data' => $d3DataValues,
    'labels' => $d3Labels,
    'access' => $graphs['team_efficiency']['access']

  ]
];




echo json_encode($req);
