$(document).ready(function() {
    $('.menu').on('click', '.menu-item' , function() {
      // إزالة العنصر الحالي المحدد
      $('.menu-item.active').removeClass('active');
      $('.musics-item.active').removeClass('active');
  
      // تحديد العنصر المنقر عليه وتطبيق التغييرات
      $(this).addClass('active');
      var contentId = $(this).index() + 1;
      $('#musics-' + contentId).addClass('active');
    });
  });
