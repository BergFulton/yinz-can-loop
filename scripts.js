
var pumpBrandDrop =$('#brand-select');

var medtronicSelect =  $('#medtronic-pump');


function hideAll(){
 medtronicSelect.hide();
}

hideAll();

pumpBrandDrop.on('change', function() {
hideAll();
  var dropDownValue = $(this).val();
  if (dropDownValue === 'medtronic') {
    console.log('medtronic');
    medtronicSelect.show();
  } else if (dropDownValue === 'Tandem') {
    console.log("no looping")
  }
});