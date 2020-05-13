function init() {
  
  ajaxCallFatturato();
  ajaxCallFba();

  moment.locale('it');

}

$(document).ready(init);



function ajaxCallFba(){
  $.ajax({
      url: 'getDataByAgent.php',
      method: 'GET',
      success: function(data) {

        myChart2(data);
      },
      error: function(err) {
        console.log("Error!!");
      }
    })
};

function ajaxCallFatturato(){
  $.ajax({
      url: 'getData.php',
      method: 'GET',
      success: function(data) {

        myChart1(data);
      },
      error: function(err) {
        console.log("Error!!");
      }
    })
};
