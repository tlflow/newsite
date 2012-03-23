$(document).ready(function(){

    var box = {

        runAnimation: function(){

            var moveBox, changewidth;

            moveBox = new Array('50','-50','15','-25','10');

            if (sessionStorage.counter==="NaN"||sessionStorage.counter>6){
                sessionStorage.counter="0";
            }
            else {
                sessionStorage.counter=Number(sessionStorage.counter)+1;
            }

            $('.show-number').each(function(){
                var a = $(this).parent().width();
                $(this).text(a);
            });

            changewidth = moveBox[sessionStorage.counter];

            $('.designer_side').animate(
                {
                   width: '+='+changewidth
                }, 1000);
            $('.developer_side').animate(
                {
                   width: '-='+changewidth
                }, 1000);

            // console.log("counter: " +sessionStorage.counter+ " coordinates: " +changewidth);

            setTimeout(box.runAnimation,3000);

        },

        _init: function(){
            box.runAnimation();
        }

    };

    box._init();

});