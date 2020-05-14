<?php

// funzione che assegna dei numeri in base alla stringa presa come parametro,
// guest = 0, employee = 1, clevel = 2
function getLevelByStringa(Stringa) {

  if ($livelloStringa == 'guest') {
    return 0;
  } elseif ($livelloStringa == 'employee') {
    return 1;
  } elseif ($livelloStringa == 'clevel') {
    return 2;
  } else {
    return -1;
  }
}



$livelloInt = getLevelByStringa($_GET['level']);
// livelloInt adesso è un numero (da 0 a 2 secondo ciò che il GET ritorna)


// se il livello preso dal GET è maggiore o uguale a quello catturato dal database
//faccio delle condizioni


if ($livelloInt >= getLevelByStringa($graphs['fatturato']['access'])) {


  //  $res[] conterrà i dati del primo grafico
}

if ($livelloInt >= getLevelByStringa($graphs['fatturato_by_agent']['access'])) {

    //  $res[] conterrà i dati del secondo grafico
};


if ($livelloInt >= getLevelByStringa($graphs['team_efficiency']['access'])) {

  //  $res[] conterrà i dati del terzo grafico

};

  header('Content-Type: application/json');
  echo json_encode($res);


// a questo punto la variabile $res conterrà solo i dati in base alla querystring che si passa nel browser (clevel, employee o guest).
