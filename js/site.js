$(document).ready(function() {

  // if javascript add class to body

  $("body").addClass('js');

  // create contact button since js is being used

  var contactForm = {

    var form = $("#contact form");

    createButton: function() {
      $('<li></li>', {
        class: 'extra',
        html: '<button>contact</button>'
        }).appendTo('#global ul');
    },

    showForm: function(e) {
      e.preventDefault();
      contactForm.form.show();

    },

    hideForm: function() {
     // coming soon
    }

    init: function(){
    contactForm.createButton();

    }

  }

  contactForm.init();

});
