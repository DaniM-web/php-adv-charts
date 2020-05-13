function getQuery() {
  var queryString = window.location.search;

  var urlParams = new URLSearchParams(queryString);
  var levelQuery = urlParams.get('level');

  return levelQuery;
}

function callAjax() {
  $.ajax({
    url: 'server.php',
    method: 'GET',
    data: {
      level: getQuery()
    },
    success: function (data) {
      var months = moment.months();
      
      myChart1(data['d1'],months);
      myChart2(data['d2']);
      myChart3(data['d3'],months);

    },
    error: function (error) {
      console.log("Error!!!");
    }
  })
}

function myChart1(data,months) {

  var ctx = $('#chart1');
  var myChart = new Chart(ctx, {
      type: data['type'],
      data: {
          labels: capitaliseMonth(months),
          datasets: [{
              label: '# of Votes',
              data: data['data'],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      access: data['access'],
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
}

function myChart2(data) {

  var ctx = $('#chart2');
  var myChart = new Chart(ctx, {
      type: data['type'],
      data: {
          labels: data['labels'],
          datasets: [{
              label: '# of Votes',
              data: data['data'],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      access: data['access'],
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
}

function myChart3(data,months) {

  var ctx = $('#chart3');
  var myChart = new Chart(ctx, {
      type: data['type'],
      data: {
          labels: capitaliseMonth(months),
          datasets: [{
              label: data['labels'][0],
              data: data['data'][0],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'

              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)'

              ],
              borderWidth: 6
          },
          {
              label: data['labels'][1],
              data: data['data'][1],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)'

              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)'

              ],
              borderWidth: 6
          },
          {
              label: data['labels'][2],
              data: data['data'][2],
              backgroundColor: [
                  'rgba(255, 206, 86, 0.2)'

              ],
              borderColor: [
                  'rgba(255, 206, 86, 1)',

              ],
              borderWidth: 6
          }
        ],

      },

      access: data['access'],
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
}


function capitaliseMonth(array) {
    var monthsUpperCase = [];
    for (var i = 0; i < array.length; i++) {
      var singleMonth = array[i];
      var firstLetter = singleMonth.charAt(0);
      var firstLetterUpper = firstLetter.toUpperCase();
      var finalMonth = singleMonth.replace(firstLetter,firstLetterUpper);
      monthsUpperCase.push(finalMonth);
    }
    console.log("arrayCompleto con prima lettera maiuscola ",monthsUpperCase);
    return monthsUpperCase;

  }
