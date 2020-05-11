$( document ).ready(function() {

  $.ajax({
    url:'server.php',
    method: 'GET',
    success: function (data) {
      var ctx = $('#line');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
           labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
           datasets: [{
               label: 'Vendite',
               data: data,
               backgroundColor: [
                  // 'rgba(150, 33, 146, 1)',
                  'rgba(82, 40, 204, 1)',
                  'rgba(4, 51, 255, 1)',
                  'rgba(0, 146, 146, 1)',
                  'rgba(0, 249, 0, 1)',
                  'rgba(202, 250, 0, 1)',
                  'rgba(255, 251, 0, 1)',
                  'rgba(255, 199, 0, 1)',
                  'rgba(255, 147, 0, 1)',
                  'rgba(255, 80, 0, 1)',
                  'rgba(255, 38, 0, 1)',
                  'rgba(216, 34, 83, 1)'
               ],
               borderColor: [
                  'rgba(150, 33, 146, 1)',
                  'rgba(82, 40, 204, 1)',
                  'rgba(4, 51, 255, 1)',
                  'rgba(0, 146, 146, 1)',
                  'rgba(0, 249, 0, 1)',
                  'rgba(202, 250, 0, 1)',
                  'rgba(255, 251, 0, 1)',
                  'rgba(255, 199, 0, 1)',
                  'rgba(255, 147, 0, 1)',
                  'rgba(255, 80, 0, 1)',
                  'rgba(255, 38, 0, 1)',
                  'rgba(216, 34, 83, 1)'
               ],
               borderWidth: 6
           }]
       },
       options: {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero: true
                   }
               }]
           }
       }
    });
          console.log('data', data);
        },
        error: function (error) {
          console.log("Find Error!!!");
        }
      });




});
