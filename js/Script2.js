$(document).ready(function(){

// alert('ciao');

// inizio facendo inserimento dei giorni su html usando un ciclo

var currentMonth = 0;
var year = 2018
var baseMonth = moment({
  year: year,
  month: currentMonth,
})

printMonth(baseMonth);
printHoliday(baseMonth);

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

function printMonth(month){

  for (var i = 1; i <= 31; i++) {
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var context = {
      day: i,
      month: month.format('MMMM'),
      dateComplete:month.format('YYYY-MM') + "-" + addZero(i)
    };
    var html = template(context);

    $('.days').append(html);
  }
};

function printHoliday(month){
$.ajax({
  url: "https://flynn.boolean.careers/exercises/api/holidays",
  method: "GET",
  data:{
    month: month.month(),
    year: month.year()
  },
  success: function(){

  },
  error: function(request, state, errors){
    alert('Si è verificato un error' + errors)
  }
})
};

function addZero(num){
  if(num < 10){
    return "0"+ num;
  }
  return num;
}
});
