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
        }
      );
    },

    showForm: function(myForm, myNav){

      function activateForm() {
        myForm
          .find('#contact_form')
            .fadeIn("slow")
      }

      myForm
          .animate(
          {height: '610px'},{
            duration: 1000
          })
          .removeClass('collapsed');

      myNav.animate(
          {top: '610px'},{
            duration: 950
          }
      );

      setTimeout(activateForm,1000);
    },

    hideForm: function(myForm, myNav){

      myForm
          .find('#contact_form')
            .hide()
            .end()

          .animate(
          {height: '0px'},{
            duration: 500

          })

          .addClass('collapsed');

      myNav.animate(
          {top: '0px'},{
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

var localNavigation = {

    showTab: function(anchortags, anchors){

        $(window).scroll(function () {

            anchors.each(function(){

                var self = this,

                    scroller,
                    sectionTop, sectionBottom, sectionColor, sectionTextColor;

                scroller = $(window).scrollTop();

                sectionTop = self.offsetTop;

                sectionBottom = self.offsetTop + self.offsetHeight;

                if ((scroller > sectionTop) && (scroller < sectionBottom)) {

                    sectionColor = $(self).css("background-color");
                    sectionTextColor = $(self).css("color");

                    $(anchortags)
                        .removeClass("selected")
                        .css({
                            "background-color": "transparent",
                            "color": "#f5eeed"
                        });

                    $("#"+self.id+"_tab")
                        .addClass("selected")
                        .css({
                            "background-color": ""+sectionColor+"",
                            "color": ""+sectionTextColor+""
                        });
                }
            });
        });

    },

    init: function() {

        var anchortags = $("#local ul li a"),
        anchors = $("section");

        localNavigation.showTab(anchortags, anchors);
    }
};


localNavigation.init();
contactForm.init();

});

