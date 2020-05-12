function myChart1(data){
  var dataType = data.d1['type'];
  var dataValue = data.d1['data'];

  var months = moment.months();




  var ctx = $('#line');
  var myChart = new Chart(ctx, {
      type: dataType,
      data: {
          labels: capitaliseMonth(months),
          datasets: [{
              label: 'Vendite',
              data: dataValue,
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
  })
};

function myChart2(data) {
  var dataLabels = data.d2['labels'];
  var dataValue = data.d2['data'];
  var ctx = $('#pie');
  var myChart = new Chart(ctx, {
      type: data.d2['type'],
      data: {
          labels: dataLabels ,
          datasets: [{
              label: '# of Votes',
              data: dataValue,
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
}

function capitaliseMonth(array) {
    var monthsUpperCase = [];
    for (var i = 0; i < array.length; i++) {
      var singleMonth = array[i];
      var firstLetter = singleMonth.charAt(0);
      var firstLetterUpper = firstLetter.toUpperCase();
      // console.log("firstletter ",firstLetter);
      // console.log("letterUpperCase ",firstLetterUpper);
      var finalMonth = singleMonth.replace(firstLetter,firstLetterUpper)
      // console.log("final month ",finalMonth);
      monthsUpperCase.push(finalMonth);
    }
    console.log("arrayCompleto con prima lettera maiuscola ",monthsUpperCase);
    return monthsUpperCase;

  }
