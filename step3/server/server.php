<?php
header('Content-Type: application/json');
require 'data.php';
include_once 'function.php';

$level = $_GET['level'];
// var_dump($level);



// guest = 0, employee = 1, clevel = 2
$livelloGet = getLevelByStringa($level,$graphs) ? : 1;
// var_dump($livelloInt);

$livelloFatturato = getLevelByStringa($graphs['fatturato']['access'],$graphs);
$livelloFatturato_By_Agent = getLevelByStringa($graphs['fatturato_by_agent']['access'],$graphs);
$livelloTeam_Efficiency = getLevelByStringa($graphs['team_efficiency']['access'],$graphs);

// // WARNING: FATTO IN TICKET !!!!!

$res = [];
// livelloGet adesso è un numero
// abbiamo anche i numeri ritornati dall'access del database
if ($livelloGet >= $livelloFatturato ) {
  // mettiamo i dati di D1
  $res['fatturato'] = $guest;
}

if ($livelloGet >= $livelloFatturato_By_Agent ) {
  // mettiamo i dati di D2
  $res['fatturato_by_agent'] = $employee;
};


if ($livelloGet >= $livelloTeam_Efficiency ) {
      // mettiamo i dati di D3
      $res['team_efficiency'] = $clevel;
};

// switch ($livelloInt) {
//   case (>= getLevelByStringa($graphs['fatturato']['access'])):
//     $res['d1'] = $guest;
//
//
//   case  (>= getLevelByStringa($graphs['fatturato_by_agent']['access'])):
//     $res['d2'] = $employee;
//
//
//   case >= (getLevelByStringa($graphs['team_efficiency']['access'])):
//     $res['d3'] = $clevel;
//
//
//   default:
//       $res['d1'] = $guest;
//     break;
// }

// if ($livelloInt < 0) {
//     $res = [];
// }

    echo json_encode($res);
