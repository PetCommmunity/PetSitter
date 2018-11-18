$(document).ready(function(){
    $("#addpet").click(function(){
   var clonedform=$("#firstpetcard").clone();
  
  clonedform.insertBefore("#addpetcard");
    });
   
});