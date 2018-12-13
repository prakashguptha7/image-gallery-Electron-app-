var formValues = JSON.parse(localStorage.getItem('formValues')) || {};
var $checkboxes = $("#checkbox-wrapper :checkbox");

function updateStorage(){
  $checkboxes.each(function(){
    formValues[this.id] = this.checked;
  });

  localStorage.setItem("formValues", JSON.stringify(formValues));
}

$checkboxes.on("change", function(){
  updateStorage();
});

// On page load
$.each(formValues, function(key, value) {
  $("#" + key).prop('checked', value);
});



function checkdays(){

var retrievedays = localStorage.getItem('formValues');
var daysselected = JSON.parse(retrievedays);
  
console.log(daysselected);

  }

checkdays();