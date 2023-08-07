var body = $('body');
var divContainer = $('.container-fluid');
var nineAM = $('#hour-9');
var tenAM = $('#hour-10');
var elevenAM = $('#hour-11');
var noon = $('#hour-12');
var onePM = $('#hour-1');
var twoPM = $('#hour-2');
var threePM = $('#hour-3');
var fourPM = $('#hour-4');
var fivePM = $('#hour-5');
var saveBtn = $('.btn');
var description = $('.description');

// test

// var thingToDo9am = divContainer.children().eq(0).children().eq(1);
// nineAM.children().eq(1).css("background-color", "blue");
saveBtn.css("background-color", "hotpink");
// thingToDo9am.text("hello");


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//https://www.w3schools.com/jquery/event_ready.asp
$(document).ready(function() {
  
  // TODO: Add a listener for click events on the save button. 
  // https://www.w3schools.com/jquery/jquery_selectors.asp
  // https://stackoverflow.com/questions/24738735/
  $(saveBtn).click(function() {
    var toDo = []
    $("textarea.description").each(function () {
      toDo.push($(this).val());
    });
  
    var toDos = toDo;
    var savedToDos = JSON.stringify(toDos);
    localStorage.setItem("ToDos", savedToDos)
  
  });


  


  // This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var getSavedToDos = localStorage.getItem("ToDos");
  var getToDo = JSON.parse(getSavedToDos);
  console.log(getToDo);
  // https://api.jquery.com/each/#each-function
  $("textarea.description").each(function (i) {
    $(this).text(getToDo[i]);
  });
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
  $(body).css("text-align", "center");
  var time = $(date.now());
  console.log(time);
 


});