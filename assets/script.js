//All console.logs are used for testing purposes

$(document).ready(function() {
  var body = $('body');
  var saveBtn = $('.btn');
  var description = $('.description'); //'To Dos'
  //get just the hour of current time in 24 hour format
  var time = dayjs();
    console.log(time.format('h:mm a'));
    hour = time.format('H');
    console.log("hour is: " + hour);
  
   //display current date and time
   var today = dayjs();
   $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
   $(body).css("text-align", "center");  

  saveBtn.css("background-color", "hotpink");
  description.css("font-family", "monospace", "font-weight", "bold");

  //tutor helped with 'parseInt($(this).attr("id").split("-")[1]);'
  // https://www.w3schools.com/jsref/jsref_split.asp
  // https://www.tutorialrepublic.com/faq/how-to-get-the-id-of-an-element-using-jquery.php#:~:text=Answer%3A%20Use%20the%20jQuery%20attr,alert%20box%20on%20button%20click.
  //make color of time blocks change depending on current time
  $(".time-block").each(function () {
    console.log("timeblock: ", $(this).attr("id").split("-")[1]);
    var timeblock = parseInt($(this).attr("id").split("-")[1]);
    if (timeblock < hour ) {
     $(this).addClass('past');
    } else if (timeblock == hour) {
     $(this).addClass('present')
    } else {
     $(this).addClass('future')
    };
    
   });

  // https://www.w3schools.com/jquery/jquery_selectors.asp
  // https://stackoverflow.com/questions/24738735/
  //click event for save button to save text input to local storage
  $(saveBtn).click(function() {
    var toDo = []
    $("textarea.description").each(function () {
      toDo.push($(this).val());
    });
  
    var toDos = toDo;
    var savedToDos = JSON.stringify(toDos);
    localStorage.setItem("ToDos", savedToDos)
  
  });
  
  //get and display text saved in local storage
  var getSavedToDos = localStorage.getItem("ToDos");
  var getToDo = JSON.parse(getSavedToDos);
  console.log(getToDo);
  
  // https://api.jquery.com/each/#each-function
  $("textarea.description").each(function(i) {
    $(this).text(getToDo[i]);
  });
  

});