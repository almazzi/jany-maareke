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
        $('.something ul li').hover(
            function(){
                $(this).css("border-bottom","2px solid #00ccff");
            },
            function(){
                $(this).css("border","none");
            }
        );
    }
);