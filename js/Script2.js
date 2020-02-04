$(document).ready(function(){

// alert('ciao');

// inizio facendo inserimento dei giorni su html

var currentMonth = "January";

for (var i = 1; i <= 31; i++) {
  console.log(i);
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var context = {
    day: i,
    month: currentMonth
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
});
