$(document).ready(function(){
	
	

	setInputValues();
})

function setInputValues(){
 $("#rate").val(sessionStorage.getItem("rate"));
 $("#visithome").prop('checked', (sessionStorage.getItem("visithome")));
 $("#sitatmyhome").prop('checked', (sessionStorage.getItem("sitatmyhome")));
 $("#cat").prop('checked', (sessionStorage.getItem("cat")));
 $("#bird").prop('checked', (sessionStorage.getItem("bird")));
 $("#mamal").prop('checked', (sessionStorage.getItem("mamal")));
 $("#other").prop('checked', (sessionStorage.getItem("other")));
 $("#fish").prop('checked', (sessionStorage.getItem("fish")));
 $("#reptiles").prop('checked', (sessionStorage.getItem("reptiles")));
 
 $("#fromDateSitting").val(sessionStorage.getItem("fromDateSitting"));
 $("#toDateSitting").val(sessionStorage.getItem("toDateSitting"));
 if(sessionStorage.getItem("fromDateSitting")){
	 $("#av").text("You are currently available in below dates");
 }
 $("#walk").prop('checked', (sessionStorage.getItem("walk")));
 $("#medication").prop('checked', (sessionStorage.getItem("medication")));
 $("#training").prop('checked', (sessionStorage.getItem("training")));
 $("#gromming").prop('checked', (sessionStorage.getItem("gromming")));
 $("#others").prop('checked', (sessionStorage.getItem("other")));
 $("#comment").val(sessionStorage.getItem("comment"));
 $("#bio").val(sessionStorage.getItem("bio"));
  
  }
  
  function saveChangesFunction(){
	  alert("Changes are saved")
  var rate = $("#rate").val();
  var visithome = $("#visithome").is(":checked");
 
  var sitatmyhome = $("#sitatmyhome").val();
//  alert($('#sitatmyhome').is(":checked"))
  var cat = $("#cat").is(":checked");
  var bird = $("#bird").is(":checked");;
  var mamal = $("#mamal").is(":checked");
  var other = $("#other").is(":checked");
  var fish = $("#fish").is(":checked");
  var reptiles = $("#reptiles").is(":checked");
  var fromDateSitting = $("#fromDateSitting").val();
 
  var toDateSitting = $("#toDateSitting").val();
  var walk = $("#walk").is(":checked");
  var medication = $("#medication").is(":checked");
   var training = $("#training").is(":checked");
  var gromming = $("#gromming").is(":checked");
  var others = $("#others").is(":checked");
   var comment = $("#comment").val();
//   alert(comment)
   var bio = $("#bio").val();
 //  alert(bio);
 
  sessionStorage.setItem("rate", rate);
  sessionStorage.setItem("visithome", visithome);
  sessionStorage.setItem("sitatmyhome", sitatmyhome);
  sessionStorage.setItem("cat", cat);
  sessionStorage.setItem("dog", dog);
  sessionStorage.setItem("other", other);
  sessionStorage.setItem("fish", fish);
  sessionStorage.setItem("reptiles", reptiles)
  sessionStorage.setItem("fromDateSitting", toDateSitting)
  sessionStorage.setItem("toDateSitting", toDateSitting)
  //alert(sessionStorage.getItem("fromDateSitting"))
  sessionStorage.setItem("walk", walk);
  sessionStorage.setItem("medication", medication);
  sessionStorage.setItem("training", training);
  sessionStorage.setItem("gromming", gromming);
  sessionStorage.setItem("others", others);
  sessionStorage.setItem("comment", comment);
  sessionStorage.setItem("bio", bio);
  setReadOnly(readOnly);
}
function setReadOnly(readOnly){
	 
 $("#rate").prop('readonly', readOnly);
 $("#visithome").prop('readonly', readOnly);
 $("#sitatmyhome").prop('readonly', readOnly);
 $("#cat").prop('readonly', readOnly);
 $("#bird").prop('readonly', readOnly);
 $("#mamal").prop('readonly', readOnly);
 $("#other").prop('readonly', readOnly);
 $("#fish").prop('readonly', readOnly);
 $("#reptiles").prop('readonly', readOnly);
 
 $("#fromDateSitting").val(sessionStorage.getItem("fromDateSitting"));
 $("#toDateSitting").val(sessionStorage.getItem("toDateSitting"));
 $("#walk").prop('checked', (sessionStorage.getItem("walk")));
 $("#medication").prop('checked', (sessionStorage.getItem("medication")));
 $("#training").prop('checked', (sessionStorage.getItem("training")));
 $("#gromming").prop('checked', (sessionStorage.getItem("gromming")));
 $("#others").prop('checked', (sessionStorage.getItem("other")));
 $("#comment").val(sessionStorage.getItem("comment"));
 $("#bio").val(sessionStorage.getItem("bio"));
}