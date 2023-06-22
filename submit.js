$(document).ready(function () {
    $("#email-neutron-pos-form").submit(function (event) {
  
      if($.trim($("#email-neutron-pos-id").val())===""){
          event.preventDefault();
          return false;
      }
      else if($.trim($("#email-neutron-pos-first-name").val())===""){
          event.preventDefault();
          return false;
      }
      else if($.trim($("#email-neutron-pos-last-name").val())===""){
          event.preventDefault();
          return false;
      }
      else if($.trim($("#email-neutron-pos-email").val())===""){
          event.preventDefault();
          return false;
      }
      else if(isEmail($("#email-neutron-pos-email").val())===false){
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
  
      $.ajax({
        type: "POST",
        url: "http://localhost:3333/api/v1/recipients/embed",
        data: formData,
        dataType: "application/json",
        encode: true,
      }).done(function (data) {
        alert("success!")
      });
  
  
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