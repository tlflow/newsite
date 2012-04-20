$(document).ready(function() {

    // ADD "SELECTED" CLASS TO WHICHEVER BUTTON IN NAV IS PRESSED

    $('.main-nav ul li a').bind({
        click: function(e){
            e.preventDefault();

            var self = $(this);
            $(".main-nav ul li a").removeClass("selected");
            self.addClass("selected");
        }
    });

    //HIDE/SHOW CONTACT AREA WHEN CONTACT BUTTON IS PRESSED

    $("#hi_form").hide();

    $('.contact-nav .email').bind({
        click: function(e){
            e.preventDefault();

            var self = $(this);
           
            if(self.hasClass("collapsed")){
                $("#contact")
                    .animate(
                        { height: '400px' }, {
                        duration: 1000,
                        easing: 'easeInExpo'
                        });
                self
                    .removeClass("collapsed")
                    .find(".iconic")
                    .removeClass("plus")
                    .addClass("minus");
                setTimeout($("#hi_form").fadeIn(), 1000);
            } else {
                $("#contact")
                    .animate(
                        { height: '0px' }, {
                        duration: 1000,
                        easing: 'easeOutExpo'
                        });
                self
                    .addClass("collapsed")
                    .find(".iconic")
                    .removeClass("minus")
                    .addClass("plus");
                $("#hi_form").fadeOut('fast', function() { /*animation completed*/ });
            }
        }

    });




    // RECENT WORKS SECTION

    var recentWork = {

        filterProjects: function(){

            $("#filter_dropdown").change(function(){

                // add hide class to every project

                $("#show_projects ul li.project").addClass("hide").removeClass("end");

                // only show what filter wants to show

                var str = $(this).val();

                $("#show_projects ul li.project."+str).removeClass("hide");

                recentWork.layoutThumbs();

            });

        },

        layoutThumbs: function(){

            // remove all the end classes

            $("#show_projects ul li").each(function(){

                var a, b;

                a = $(this).attr("class");

                b = a.match(/end_[0-9 -()+]+$/);

                $(this).removeClass(""+b+"");

            });

            // add end class to projects not hidden

            $("#show_projects ul li:not(.hide)").each(function(i){

                i=i+1;

                $(this).addClass("end_" + i);

            });

        },


        _init: function(){
            recentWork.filterProjects();
        }

    };

    recentWork._init();


});
