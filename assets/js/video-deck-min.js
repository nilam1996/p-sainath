$(".video-deck .card-body").on("click",function(){$(this).parent().find("a").trigger("click")}),$(".video-deck a").fancybox({caption:function(c,i){return $(this).parent().find(".card-text").html()}});