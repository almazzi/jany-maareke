/**
 * Created by isakuulu on 6/23/2014.
 */


$(document).ready(
    function(){
        $('.someone  ul li').hover(
            function(){
                $(this).css({"border-left":"2px solid #0099cc","backgroundColor":"#ebebea"});
            },
            function(){
                $(this).css({"border":"none","backgroundColor":"transparent"});
            }
        );
    }
);
$(document).ready(
    function(){
        $('#all li a').hover(
            function(){
                $(this).css("border-bottom","1px solid #00ccff");
            },
            function(){
                $(this).css("border","1px solid transparent");
            }
        );
    }
);
$(document).ready(
    function(){
        $('.bottom-of-comm ul li a').hover(
            function(){
                $(this).css('color','#0099cc');
            },
            function(){
                $(this).css('color','#bdbdbd')
            }

        );
    }
);

$(document).ready(
    function(){
        $('[name="comment"]').click(
            function(){
               var  $kosh=document.createElement('div');
                $kosh.addClass('comment');
                var $para=$('[name="com"]').val();

                $('.news-content').append(kosh);


            }
        );
    }
);