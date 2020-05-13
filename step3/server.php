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

$guest = $graphs['fatturato'];

$employee = [
  'd1' => $guest,
  'd2' =>[
    'type' => $graphs['fatturato_by_agent']['type'],
    'labels' => $d2Labels,
    'data' => $d2DataValues,
    'access' => $graphs['fatturato_by_agent']['access']
  ]
];

$clevel = [
  'd1' => $guest,
  'd2' => $employee['d2'],
  'd3' => [
    'type' => $graphs['team_efficiency']['type'],
    'data' => $d3DataValues,
    'labels' => $d3Labels,
    'access' => $graphs['team_efficiency']['access']
  ]
];

$level = $_GET[level];

if ($level == "guest") {
  echo json_encode($guest);
} elseif ($level == "employee") {
  echo json_encode($employee);
} else {
  echo json_encode($clevel);
}


// $req = [
//   'd1' => $graphs['fatturato'],
//   'd2' => [
//     'type' => $graphs['fatturato_by_agent']['type'],
//     'labels' => $d2Labels,
//     'data' => $d2DataValues,
//     'access' => $graphs['fatturato_by_agent']['access']
//   ],
//   'd3' => [
//     'type' => $graphs['team_efficiency']['type'],
//     'data' => $d3DataValues,
//     'labels' => $d3Labels,
//     'access' => $graphs['team_efficiency']['access']
//
//   ]
// ];




// echo json_encode($req);
