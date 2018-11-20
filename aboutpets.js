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