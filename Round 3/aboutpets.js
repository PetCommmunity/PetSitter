$(document).ready(function(){

	if(sessionStorage.getItem("petAdded")){
		$("#editButton").show();
 // $("#saveChangesSuccess").show();
 // $("#successRegisterAlert").hide();
  setReadOnly(true);
  setInputValues();
   $("#saveChangesButton").hide();
	}
    $("#addpet").click(function(){
   var clonedform=$("#firstpetcard").clone();
   $("#name", clonedform).val("");
   $("#age", clonedform).val("");
   $("#breed", clonedform).val("");
   $("#petdescription", clonedform).val("");
   $("#img-upload", clonedform).attr("src","");
   
   $("#imgInp", clonedform).val("");
   
  clonedform.insertBefore("#addpetcard");
    });
    $(document).on('change', '.btn-file :file', function() {
		//	alert("hi");
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			//alert(label);
		input.trigger('fileselect', [label]);
			$(this).parents('.card-img-top').attr("src",label);
        });
    
		$('.btn-file :file').on('fileselect', function(event, label) {
		    
		//	alert("hi")
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;
		    
		    if( input.length ) {
		        input.val(log);
		    } else {
		       // if( log ) alert(log);
		    }
		//	alert(log);
			$(this).parents('.card-img-top').attr("src",label);
			//alert( $(this).parents('.card-img-top').src)
	    
		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
				
		            $('#img-upload').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		//	alert("change")
		    readURL(this);
		});
   
});

function setReadOnly(canRead){
    // $("#email1").prop("readonly", canRead);
    $("#name").prop("readonly", canRead);
    $("#age").prop("readonly", canRead);
    $("#type").prop("disabled", canRead);
    $("#breed").prop("readonly", canRead);
    $("#size").prop("readonly", canRead);
	  $("#petdescription").prop("readonly", canRead);
  }
  
  
 function saveChangesFunction(){
  var name = $("#name").val();
  var age = $("#age").val();
  var type = $("#type").val();
  var breed = $("#breed").val();
  var size = $("#size").val();
  var petdescription = $("#petdescription").val();
  var petImage=$("#imgInp").val();
   sessionStorage.setItem("petAdded",true);
 
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("age", age);
  sessionStorage.setItem("type", type);
  sessionStorage.setItem("breed", breed);
  sessionStorage.setItem("size", size);
   sessionStorage.setItem("petdescription", petdescription);
  $("#saveChangesButton").hide();
  sessionStorage.setItem("editProfile", "false");
  $("#editButton").show();
 // $("#saveChangesSuccess").show();
 // $("#successRegisterAlert").hide();
 // alert(petImage)
  sessionStorage.setItem("petImage",petImage );
  setReadOnly(true);
  
  setInputValues();
 
 
}
function setInputValues(){
  
    var name = sessionStorage.getItem("name");
    var age = sessionStorage.getItem("age");
    var type = sessionStorage.getItem("type");
    var breed = sessionStorage.getItem("breed");
    var size = sessionStorage.getItem("size");
    var petdescription = sessionStorage.getItem("petdescription");
	var petImage=sessionStorage.getItem("petImage" );
 // alert(petImage)
    $("#name").val(name);
    $("#age").val(age);
    $("#type").val(type);
    $("#breed").val(breed);
    $("#petdescription").val(petdescription);
	// $('#imgInp').val( petImage);
	//readURL("file:///"+petImage);
	// alert("here")
    setReadOnly(true);
	$("#imgFile").hide();
	
  }
  function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
				
		            $('#img-upload').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		}
  function editButtonFunction(){
    $("#editButton").hide();
    $("#saveChangesButton").show();
	 $("#imgFile").show();
    setReadOnly(false);
  }
  
 
  
 function searchPetSitter() {
  // Cancel the default action, if needed

  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
   window.location.href = "searchResults.html";
  }
};
