$(document).ready(function(){
  // "response": [
  //        {
  //            "name": "Capodanno",
  //            "date": "2018-01-01"
  //        },
  //        {
  //            "name": "Epifania",
  //            "date": "2018-01-06"
  //        }
  //    ]
  var chiamata = $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      method: "GET",
      success: function(data){
        console.log($(this));
        printData(data.response);
      },
      error: function(request, state, errors){
        alert('Si è verificato un error' + errors)
      }
    }
  );

 var giorniNelMese = moment("2018-01", "YYYY-MM").daysInMonth();
 console.log(giorniNelMese);

 for (var i = 1; i < giorniNelMese.length; i++) {
   var giorni = i;
   console.log(giorni);
 };

  function printData(festivita){
    for (var i = 0; i < festivita.length; i++) {
      var festivo = festivita[i];

      var source = $('#entry-template').html();
      var template = Handlebars.compile(source);
      var context = {festivo};
      var html = template(festivo);

      $('.mese').append(html);
    }
  }
});
