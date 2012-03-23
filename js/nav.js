$(document).ready(function() {

    // Lightbox effect

    $("#triggers img[rel]").bind('click', function(){
        $(this).overlay({effect: 'apple'});
    });

    // CHANGE OPACITY OF DRAWINGS IN INTRO SECTION AS USER SCROLLS DOWN
    
    $(window).scroll(function () {
        $("#drawings").animate({opacity:0.15}, 1000, 'linear')
    });

    // ADD "SELECTED" CLASS TO WHICHEVER BUTTON IN NAV IS PRESSED

    $('nav ul li a').click(function(e) {
        e.preventDefault();

        if($(this).attr("class")=="anchorLink"){
            $('nav ul li a').removeClass("selected");
            ($(this)).addClass("selected");
        }

    });

    //HIDE/SHOW CONTACT AREA WHEN CONTACT BUTTON IS PRESSED

    $("#contact_info").hide();

    $('#contact_button').bind({
        click: function(e){
            e.preventDefault();
            if($(this).attr("class")=="collapsed") {
                $("#contact").animate({height: '400px'}), 11000, 'linear';
                $(this).removeClass('collapsed').animate({top: '+=365px'}), 30000, 'linear';
                $(this).find(".icon").replaceWith("<span class=\"icon\">A</span>");
                setTimeout($("#contact_info").fadeIn(), 3000);
            } else {
                $("#contact").animate({height: '35px'}), 11000, 'linear';
                $(this)
                    .addClass('collapsed')
                    .find(".icon").replaceWith("<span class=\"icon\">@</span>");
                $("#contact_info").fadeOut('fast', function() { /*animation completed*/ });
                $(this).animate({top: '-=365px'}), 30000, 'linear';
            }
        }

    });

    // MOUSE EVENTS FOR FAVORITES BUTTON

    $("#favorites").bind({
        click: function(e){
            e.preventDefault();
            document.location.href="/favorites";
        },
        mouseenter: function(e){
            $(this).css()
        },
        mouseleave: function(e){

        }
    });

    // CLICK EVENTS FOR BUTTONS IN ABOUT TERENCE SECTION

    $('.resource-item').each(function(){

        var getClass = $(this).find('span').attr('class'); // get class from child span
        var removeIconClass = getClass.substr(5, getClass.length); // removes icon and returns the other class name

        var self = $(this);

        self.bind({

            click: function(e){

                e.preventDefault();
                document.location.href = "/"+removeIconClass+"/";

            },
            mouseenter: function(e){

                e.preventDefault();
                if(removeIconClass=="sketch"){
                    $(this).css("background-color","#97BE0D");
                } else if(removeIconClass=="photoblog"){
                    $(this).css("background-color","#C63F4F");
                } else if(removeIconClass=="experiments"){
                    $(this).css("background-color","#736E87");
                } else if(removeIconClass=="icons"){
                    $(this).css("background-color","#E8A240");
                } else if(removeIconClass=="wallpapers"){
                    $(this).css("background-color","#D84F5F");
                } else if(removeIconClass=="miscellaneous"){
                    $(this).css("background-color","#1D9ACA");
                }
                $(this).css("cursor","pointer");
            },
            mouseleave: function(e){

                e.preventDefault();
                $(this).css("background-color","#2B78BF");
            }

        });

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

    }

    recentWork._init();


});
