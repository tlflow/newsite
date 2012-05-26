$(document).ready(function() {

    // if javascript add .js class to body

    $("body").addClass('js');

    // Contact Button

    var contactForm = {

        createButton: function(myForm, myNav){
            $("<li></li>", {
                html: '<button>contact</button>',
                class: 'extra'
            }).appendTo("#global ul");

            $("#global ul li button").on(
                "click", function(e){
                    e.preventDefault();

                    if(myForm.hasClass('collapsed')){
                        contactForm.showForm(myForm, myNav);
                    } else {
                        contactForm.hideForm(myForm, myNav);
                    }
                });
        },

        showForm: function(myForm, myNav){

            function activateForm() {
                myForm
                    .find('#contact_form')
                    .fadeIn("slow")
            }

            myForm
                .animate(
                    {
                        height: '610px'
                    },
                    {
                        duration: 1000
                    })
                .removeClass('collapsed');

            myNav
                .animate(
                    {
                        top: '610px'
                    },
                    {
                        duration: 950
                    });

            setTimeout(activateForm,1000);
        },

        hideForm: function(myForm, myNav){

            myForm
                .find('#contact_form')
                    .hide()
                    .end()

                .animate(
                    {
                        height: '0px'
                    },
                    {
                        duration: 500
                    })

                .addClass('collapsed');

            myNav.animate(
                {
                    top: '0px'
                },
                {
                    duration: 1300,
                    easing: 'easeOutExpo'
                }
            );

        },

        init: function() {
            var myForm = $("#contact"),
                myNav = $("#navigation");

            contactForm.createButton(myForm, myNav);
        }
    };

    // Local Navigation

    var pageScroll = {

        showTab: function(anchortags, anchors){

            $(window).scroll(function () {

                anchors.each(function(){

                    var self = this,
                        scroller = $(window).scrollTop(),
                        sectionTop = self.offsetTop,
                        sectionBottom = self.offsetTop + self.offsetHeight,
                        sectionColor = $(self).css("background-color"),
                        sectionTextColor = $(self).css("color");

                    if ((scroller > sectionTop) && (scroller < sectionBottom)) {

                        $(anchortags)
                            .removeClass("selected");
                            /*
                            .css({
                                "background-color": "transparent",
                                "color": "#f5eeed"
                            });
                            */

                        $("#"+self.id+"_tab")
                            .addClass("selected");
                            /*
                            .css({
                                "background-color": ""+sectionColor+"",
                                "color": ""+sectionTextColor+""
                            });
                            */
                    }
                });
            });

        },

        scrollAnimation: function(destination, elementClick){

            $("html:not(:animated),body:not(:animated)")
                .animate(
                    {
                        scrollTop: destination
                    },
                    {
                        duration: 800,
                        easing: 'easeOutCirc'
                    },
                    function() {
                        window.location.hash = elementClick;
                    });

        },

        localButton: function(anchortags){

            $(anchortags).each(function() {

                var self = $(this);

                self.on(
                    "click", function(e){
                        e.preventDefault();

                        var minimizeSpacing = 45,
                            elementClick = self.attr("href"),
                            destination = $(elementClick).offset().top - minimizeSpacing;

                        pageScroll.scrollAnimation(destination, elementClick);
                    }
                );

            });
        },
        
        sectionButton: function(anchors){

            anchors.each(function(i){

                var self = $(this);

                self.find("nav.section li").on(
                    "click", function(e){
                        e.preventDefault();

                        var thisButton = $(this);

                        if (thisButton.attr("class")=="previous-section"){

                            i=i-1;

                            console.log("goes up to: "+anchors[i].id);

                        } else if (thisButton.attr("class")=="next-section"){

                            i=i+1;

                            console.log("goes down to: "+anchors[i].id);

                        } else if (thisButton.attr("class")=="content-top"){

                            i = 0;

                            console.log("goes to: "+anchors[i].id);

                        }

                    }

                )

            })

        },

        init: function() {

            var anchortags = $("#local ul li a"),
                anchors = $("section");

            pageScroll.showTab(anchortags, anchors);
            pageScroll.localButton(anchortags);
            pageScroll.sectionButton(anchors);
        }
    };


// Start Initialization Functions

pageScroll.init();
contactForm.init();

});

