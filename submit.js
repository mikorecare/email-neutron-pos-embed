$(document).ready(function () {
  var loadingForm = $('#email-neutron-pos-loader');
  var showButton = $('#email-neutron-pos-embedded-subscribe');
  var errorResponse = $('#email-neutron-pos-error-response');
  var errorEmail = $('#email-neutron-pos-error-email');
  var mainForm = $('#email-neutron-pos-form');
  var successResponse = $('#email-neutron-pos-success-response');
  var errorSubmit = $('#email-neutron-pos #email-neutron-pos-error-submit');
    $("#email-neutron-pos-form").submit(function (event) {
      
    
      if($.trim($("#email-neutron-pos-id").val())===""){
          errorResponse.show();
          errorEmail.hide();
          errorSubmit.hide();
          event.preventDefault();
          return false;
      }
      else if($.trim($("#email-neutron-pos-first-name").val())===""){
          errorResponse.show();
          errorEmail.hide();
          errorSubmit.hide();
          event.preventDefault();
          return false;
      }
      else if($.trim($("#email-neutron-pos-last-name").val())===""){
          errorResponse.show();
          errorEmail.hide();
          errorSubmit.hide();
          event.preventDefault();
          return false;
      }
      else if($.trim($("#email-neutron-pos-email").val())===""){
          errorResponse.show();
          errorSubmit.hide();
          errorEmail.hide();
          event.preventDefault();
          return false;
      }
      else if(isEmail($("#email-neutron-pos-email").val())===false){
          errorEmail.show();
          errorSubmit.hide();
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
          if(data.message==='no audience'){
            showButton.show();
            loadingForm.hide();
            errorResponse.hide();
            errorEmail.hide();
            errorSubmit.show();
            console.log(data.message)
            return false;
          }
          loadingForm.hide();
          showButton.show();
          mainForm.hide();
          successResponse.show();
        }).fail(function(data){
          showButton.show();
          loadingForm.hide();
          errorResponse.hide();
          errorEmail.hide();
          errorSubmit.show();
          console.log('server error')
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