$(document).ready(function() {
    $('.whatsapp-button').click(function() {
      var phoneNumber = "+966530117778"; // رقم الهاتف المرتبط بحساب واتساب
      var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber;
  
      window.open(whatsappUrl, "_blank");
    });
  });