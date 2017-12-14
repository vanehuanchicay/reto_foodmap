
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});


 var cont = $('#container');
    
    $('#categorias').on('change', function() {
    	var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "thai") {
      cont.html('<img src="assets/img/thai/1.png" class="thai_one"> <img src="assets/img/thai/2.jpg" class="thai_two"> <img src="assets/img/thai/3.jpg" class="thai_three"> <img src="assets/img/thai/4.jpg" class="thai_four">');
      }
      if( selection === "chilena") {
      cont.html('<img src="assets/img/chilena/cl1.jpg" class="cl_one"> <img src="assets/img/chilena/cl2.jpg" class="cl_two"> <img src="assets/img/chilena/cl4.jpg" class="cl_three"> <img src="assets/img/chilena/cl3.jpg" class="cl_four">');
      }
      if( selection === "hindu") {
      cont.html('<img src="assets/img/hindu/h1.jpg" class="hi_one"> <img src="assets/img/hindu/h4.jpg" class="hi_two"> <img src="assets/img/hindu/h3.jpg" class="hi_three"> <img src="assets/img/hindu/h2.jpg" class="hi_four">');
      }
      if( selection === "italiana") {
      cont.html('<img src="assets/img/italiana/i1.jpg" class="it_one"> <img src="assets/img/italiana/i2.jpg" class="it_two"> <img src="assets/img/italiana/i4.jpg" class="it_three"> <img src="assets/img/italiana/i3.jpg" class="it_four">');
      }
  })
