$(document).ready(function(){
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
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
        });
    
		$('.btn-file :file').on('fileselect', function(event, label) {
		    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;
		    
		    if( input.length ) {
		        input.val(log);
		    } else {
		       // if( log ) alert(log);
		    }
	    
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
 
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("age", age);
  sessionStorage.setItem("type", type);
  sessionStorage.setItem("breed", breed);
  sessionStorage.setItem("size", size);
   sessionStorage.setItem("petdescription", size);
  $("#saveChangesButton").hide();
  sessionStorage.setItem("editProfile", "false");
  $("#editButton").show();
 // $("#saveChangesSuccess").show();
 // $("#successRegisterAlert").hide();
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
 
  
    $("#name").val(name);
    $("#age").val(age);
    $("#type").val(tyoe);
    $("#brees").val(breed);
    $("#petdescription").val(petdescription);
    setReadOnly(true);
  }
  
  function editButtonFunction(){
    $("#editButton").hide();
    $("#saveChangesButton").show();
    setReadOnly(false);
  }