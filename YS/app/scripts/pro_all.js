$(function() {
  $(".pro-all").each(function(){
    var n=0;
    $(this).find("header").click(function(){
      if(n%2==0){
      $(this).parent().addClass("on");
    }
    else{
      $(this).parent().removeClass("on"); 
    }
    n++;
    })
  })
})