$(document).ready(function(){

// alert('ciao');

// inizio facendo inserimento dei giorni su html usando un ciclo

var currentMonth = 0;
console.log(currentMonth);
var year = 2018;
var baseMonth = moment({
  year: year,
  month: currentMonth,
});

printMonth(baseMonth);
printHoliday(baseMonth);

$('#next').click(function(){
  // andare avanti di un mese e richiamare le funzioni di printing
  var thisMonth= $('h2').attr('date-current-month');
  var date = moment(thisMonth).add(1,'months');
  console.log(date);
  $('.days').text('');
  printMonth(date);
  printHoliday(date);
});
$('#prev').click(function(){
// andare indietro di un mese e richiamare le funzioni di printing
var thisMonth= $('h2').attr('date-current-month');
var date = moment(thisMonth).subtract(1,'months');
console.log(date);
$('.days').text('');

printMonth(date);
printHoliday(date);
});

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
  // aggiungo all'h2 il nome del mese
$('h2').text(month.format('MMMM-YYYY'));
// aggiungo all'h2 un attributo, così da poter poi aggiungere un mese e cambiare di mese al click
$('h2').attr('date-current-month', month.format('YYYY-MM'))

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
  success: function(data){
   var holidays = data.response;

  for (var i = 0; i < holidays.length; i++) {
    $(".day").each(function() {
    if ($(this).attr('data-date-complete')== holidays[i].date) {
      $(this).addClass('red');
      $(this).find('.holiday_name').append(holidays[i].name);
    }
  });
};

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
