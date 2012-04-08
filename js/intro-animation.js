$(document).ready(function(){

    var box = {

        runAnimation: function(){

            var moveBox, changewidth;

            moveBox = new Array(50,-50,15,-25,10,30,-20,-10,-15,10);

            if (sessionStorage.counter==="NaN"||sessionStorage.counter>6){
                sessionStorage.counter="0";
            }
            else {
                sessionStorage.counter=Number(sessionStorage.counter)+1;
            }

            changewidth = moveBox[sessionStorage.counter];

            function getPercentage(self){
                var a = self.width();
                // where 300 is 50% of the section (remember 600 is 100%)
                var b = 275+a;
                var c = b/550*50;
                self
                    .find('.show-number')
                    .css({ opacity: 0.01 })
                    .text(Math.round(c)+"%")
                    .fadeTo(500, 1);
            }

            $('.designer_side').animate(
                {
                   width: '+='+changewidth
                }, 1000, function(){
                    var self = $(this);
                    getPercentage(self);
                });
            $('.developer_side').animate(
                {
                   width: '-='+changewidth
                }, 1000, function(){
                    var self = $(this);
                    getPercentage(self);
                });

            // console.log("counter: " +sessionStorage.counter+ " coordinates: " +changewidth);

            setTimeout(box.runAnimation,3000);

        },

        _init: function(){
            box.runAnimation();
        }

    };

    box._init();

});