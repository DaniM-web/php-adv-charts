<?php

function getLevelByStringa($livelloStringa,$graphs) {

  if ($livelloStringa == $graphs['fatturato']['access']) {
    return 1;
  } elseif ($livelloStringa == $graphs['fatturato_by_agent']['access']) {
    return 2;
  } elseif ($livelloStringa == $graphs['team_efficiency']['access']) {
    return 3;
  }
} 
