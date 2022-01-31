
let events = document.getElementsByClassName("scheduleEvent");

var saveEvents = function(){
    for(scheduleEvent of events){
        localStorage.setItem("scheduleEvents", JSON.stringify(scheduleEvent));
    }
};


$(".event").on("click", "p", function(){
    console.log("clicked");
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);;

    $(this).replaceWith(textInput);
    
    textInput.trigger("focus");

    console.log(text);
});

$(".event").on("blur", "textarea", function(){
    var text = $(this)
      .val()
      .trim();

    var taskP = $("<p>")
      .text(text);
  
    $(this).replaceWith(taskP);

});

$(".saveBtn").on("click", function(){
    console.log("click")
    saveEvents();
});

var d = new Date();
var strDate = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();

$("#currentDay").text(strDate);

var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

