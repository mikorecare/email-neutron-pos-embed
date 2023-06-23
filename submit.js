$(document).ready(function () {
  var loadingForm = $('#email-neutron-pos-loader');
  var showButton = $('#email-neutron-pos-embedded-subscribe');
  var errorResponse = $('#email-neutron-pos-error-response');
  var errorEmail = $('#email-neutron-pos-error-email');
    $("#email-neutron-pos-form").submit(function (event) {
      
    
      if($.trim($("#email-neutron-pos-id").val())===""){
          errorResponse.show();
          errorEmail.hide();
          event.preventDefault();
          return false;
      }
      else if($.trim($("#email-neutron-pos-first-name").val())===""){
          errorResponse.show();
          errorEmail.hide();
          event.preventDefault();
          return false;
      }
      else if($.trim($("#email-neutron-pos-last-name").val())===""){
          errorResponse.show();
          errorEmail.hide();
          event.preventDefault();
          return false;
      }
      else if($.trim($("#email-neutron-pos-email").val())===""){
          errorResponse.show();
          errorEmail.hide();
          event.preventDefault();
          return false;
      }
      else if(isEmail($("#email-neutron-pos-email").val())===false){
          errorEmail.show();
          errorResponse.hide();
          event.preventDefault();
          return false;
      }
      else{
          var formData = {
        id: $("#email-neutron-pos-id").val(),  
        fname: $("#email-neutron-pos-first-name").val().toLowerCase(),
        lname: $("#email-neutron-pos-last-name").val().toLowerCase(),
        email: $("#email-neutron-pos-email").val().toLowerCase(),
      };
      loadingForm.show();
      showButton.hide();
      
        $.ajax({
          type: "POST",
          url: "http://localhost:3333/api/v1/recipients/embed",
          data: formData,
          dataType: "json",
          encode: true,
        }).done(function (data) {
          console.log(data);
          loadingForm.hide();
          showButton.show();
        }).fail(function(data){
          console.log("failed")
        });
      
        event.preventDefault();
        
  
      }
      
      event.preventDefault();
    });


      function isEmail(email) {
          var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if(!regex.test(email)) {
             return false;
          }else{
             return true;
          }
        }
  });