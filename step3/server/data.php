<?php

header('Content-Type: application/json');
require 'database.php';



// Scompongo il fatturato_by_agent  per ricavarmi i data []
$d2Array = $graphs['fatturato_by_agent']['data'];
$d2Labels = [];
$d2DataValues = [];
foreach ($d2Array as $key => $value) {
  $d2Labels[] = $key;
  $d2DataValues[] = $value;
};

//scompongo il team_efficiency per ricavarmi i data[]
$d3Array = $graphs['team_efficiency']['data'];
$d3Labels = [];
$d3DataValues = [];
foreach ($d3Array as $key => $value) {
  $d3Labels[] = $key;
  $d3DataValues[] = $value;

}

// Database scomposto nei diversi livelli di accesso

// ||| 1 livello : database di accesso guest
$guest = $graphs['fatturato'];

// ||| 2 livello : database di accesso employee
$employee = [
    'type' => $graphs['fatturato_by_agent']['type'],
    'labels' => $d2Labels,
    'data' => $d2DataValues,
    'access' => $graphs['fatturato_by_agent']['access']
];
// ||| 3 livello: database di accesso clevel
$clevel = [
    'type' => $graphs['team_efficiency']['type'],
    'data' => $d3DataValues,
    'labels' => $d3Labels,
    'access' => $graphs['team_efficiency']['access']
];
