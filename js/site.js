$(document).ready(function() {

  // if javascript add class to body

  $("body").addClass('js');

  // create contact button since js is being used

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

      setTimeout(activateForm,1000);

      myForm
          .animate(
          {height: '610px'},{
            duration: 500
          })
          .removeClass('collapsed');

      myNav.animate(
          {top: '610px'},{
            duration: 1000,
            easing: 'easeInExpo'
          }
      );


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
      var myForm = $("#contact");
      var myNav = $("#navigation");

      contactForm.createButton(myForm, myNav);
    }
  };

contactForm.init();


});
