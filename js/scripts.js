$(document).ready(function() {
  $("#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName  = $("#new-last-name").val();


    var newContact = { firstName: inputtedFirstName,
                       lastName: inputtedLastName,
                       addresses: []
                     };

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedZip = $(this).find("input.new-zip").val();

      var newAddress = {
        street: inputtedStreet,
        city: inputtedCity,
        state: inputtedState,
        zip: inputtedZip
      }

      newContact.addresses.push(newAddress);
    });



    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>")


    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $(".new-street").val("");
    $(".new-city").val("");
    $(".new-state").val("");
    $(".new-zip").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      // $(".address").text(newContact.address);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + ", " + address.zip + "</li>");
      });
    });
  });


  $("#add-address").click(function() {
    $("#new-addresses").append('' +
    '<div class="new-address">' +
      '<div class="form-group">' +
        '<label for="new-street">Street</label>' +
        '<input type="text" class="form-control new-street">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-city">City</label>' +
        '<input type="text" class="form-control new-city">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="new-state">State</label>' +
        '<input type="text" class="form-control new-state">' +
      '</div>' +
    '<div class="form-group">' +
      '<label for="new-zip">Zip</label>' +
      '<input type="text" class="form-control new-zip">' +
    '</div>' + '</div>');
  });
});
