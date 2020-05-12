function init() {
  ajaxCall();
  moment.locale('it');

}

$(document).ready(init);



function ajaxCall(){
  $.ajax({
      url: 'server.php',
      method: 'GET',
      success: function(data) {
        myChart1 (data);
        myChart2(data);
      },
      error: function(err) {
        console.log("Error!!");
      }
    })
};
