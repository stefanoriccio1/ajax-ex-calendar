$(document).ready(function(){

// alert('ciao');

// inizio facendo inserimento dei giorni su html usando un ciclo

var currentMonth = 0;
var year = 2018
var baseMonth = moment({
  year: year,
  month: currentMonth,
})

console.log(baseMonth.format('YYYY-MM'));

for (var i = 1; i <= 31; i++) {
  console.log(i);
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var context = {
    day: i,
    month: baseMonth.format('MMMM'),
    dateComplete:baseMonth.format('YYYY-MM') + "-" + addZero(i)
  };
  var html = template(context);

  $('.days').append(html);
}

// risposta Ajax:
// {
//     "success": true,
//     "response": [
//         {
//             "name": "Capodanno",
//             "date": "2018-01-01"
//         },
//         {
//             "name": "Epifania",
//             "date": "2018-01-06"
//         }
//     ]
// }

// FUNCTIONS--------------------->

function addZero(num){
  if(num < 10){
    return "0"+ num;
  }
  return num;
}
});
