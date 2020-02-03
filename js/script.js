$(document).ready(function(){

  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      method: "GET",
      success: function(data){
      console.log(data.response);
      },
      error: function(request, state, errors){
        alert('Si è verificato un error' + errors)
      }
    }
  );
});
