$(document).ready(function(){

// alert('ciao');

// inizio facendo inserimento dei giorni su html

var currentMonth = "January";
var days = 31;
for (var i = 1; i <= days; i++) {
  var day = i;
  console.log(day);
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var context = {day};
  var html = template(context);

  $('.current').append(html);
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
});
