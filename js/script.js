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
  function printData(festivita){
    console.log(festivita);
    console.log(festivita[0].name + ' ' + festivita[0].date);
    for (var i = 0; i < festivita.length; i++) {
      var festivo = festivita[i];
      console.log(festivo);

      var source = $('#entry-template').html();
      var template = Handlebars.compile(source);
      var context = {festivo};
      var html = template(festivo);

      $('.mese').append(html);
    }
  }
});
