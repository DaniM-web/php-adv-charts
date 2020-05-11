$( document ).ready(function() {

console.log('hello world');

$.ajax({
    url: 'server.php',
    method: 'GET',
    success: function (data) {
      // var labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
      // var data = [12, 19, 3, 5, 2, 3];
      console.log(data['fatturato']['data']);
      var ctx = $('#line');
      var myChart = new Chart(ctx, {
          type: data.fatturato['type'],
          data: {
              labels:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"] ,
              datasets: [{
                  label: '# of Votes',
                  data: data.fatturato['data'],
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
                  borderWidth: 1
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
    }, error: function(err) {
    }
  })

  $.ajax({
      url: 'server.php',
      method: 'GET',
      success: function (data) {
        var arrayAgent = data.fatturato_by_agent['data'];
        var arrDataKeys = Object.keys(arrayAgent);
        var arrDataValue = [];
        for (var x in arrayAgent) {
          arrDataValue.push(arrayAgent[x]);
        }
        console.log(arrDataValue);

        var ctx = $('#pie');
        var myChart = new Chart(ctx, {
            type: data.fatturato_by_agent['type'],
            data: {
                labels: arrDataKeys ,
                datasets: [{
                    label: '# of Votes',
                    data: arrDataValue,
                    backgroundColor: [
                      // 'rgba(150, 33, 146, 1)',
                      'rgba(82, 40, 204, 1)',
                      'rgba(4, 51, 255, 1)',
                      'rgba(0, 146, 146, 1)',
                      'rgba(0, 249, 0, 1)'

                    ],
                    borderColor: [
                      'rgba(150, 33, 146, 1)',
                      'rgba(82, 40, 204, 1)',
                      'rgba(4, 51, 255, 1)',
                      'rgba(0, 146, 146, 1)'
                    ],
                    borderWidth: 1
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
      }, error: function(err) {
      }
    })

});
