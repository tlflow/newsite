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

    $("#say_hi").hide();

    $('.contact-nav .email').bind({
        click: function(e){
            e.preventDefault();

            var self = $(this);
           
            if(self.hasClass("collapsed")){
                $("#contact")
                    .animate(
                        { height: '360px' }, {
                        duration: 1000,
                        easing: 'easeInExpo'
                        });
                self
                    .removeClass("collapsed")
                    .find(".iconic")
                    .removeClass("plus")
                    .addClass("minus")
                    .css({
                        'padding-top': '5px',
                        'margin-top': '0'
                    });
                setTimeout($("#say_hi").fadeIn(), 1000);
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
                    .addClass("plus")
                    .css({
                        'padding-top': '0',
                        'margin-top': '-5px'
                    });
                $("#say_hi").fadeOut('fast', function() { /*animation completed*/ });
            }
        }

    });

    // SECTION NAV AND MAIN NAV BUTTON SCROLLING PAGE FUNCTIONALITY

    $('.section-nav li.up, .section-nav li.down, a.anchorLink').each(function() {

         // self = what button is pressed
         var self = $(this);

         self.bind({
             click: function(e){
                 e.preventDefault();

                 // get what sections are before and/or after (if any)

                 var displayCurrent = self.closest('.display').attr("id");

                 var displayBefore, displayAfter, elementClick, destination;

                 switch(displayCurrent)
                 {
                    case "skills":
                        displayBefore = "intro";
                        displayAfter = "about";
                        break;
                    case "about":
                        displayBefore="skills";
                        displayAfter="work";
                        break;
                    case "work":
                        displayBefore="about";
                        displayAfter="resources";
                        break;
                    case "resources":
                        displayBefore="work";
                        break;
                 }

                 // get section based on what button is pressed

                 if(self.attr("class")==="up"){
                     // up arrow pressed - go to section before
                     elementClick="#"+displayBefore;
                 } else if(self.attr("class")==="down") {
                     // down arrow pressed - go to section after
                    elementClick="#"+displayAfter;
                 } else {
                    // anchorLink button is pressed (like main nav)
                    elementClick=self.attr("href");
                 }

             // scrolling part
                 if (elementClick==="#welcome"){
                     // -40 to account for welcome section top padding
                     destination = -40;
                 } else {
                    destination = $(elementClick).offset().top;
                 }

                 // scrolling animation
                 $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1000, function() {
                    window.location.hash = elementClick;
                 });

             },

             mouseenter: function(e){
                 e.preventDefault();
                 // lights up
             },

             mouseleave: function(e){
                 e.preventDefault();
                 // greys out
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

    };

    recentWork._init();


});
