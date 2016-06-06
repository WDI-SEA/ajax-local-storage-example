$(document).ready(function() {
  /*
   * AJAX w/JSON
   */

  /*
   * AJAX with a callback
   */
  $.get('data.json', function(data) {
    console.log(data);
  });

  /*
   * AJAX with a done promise
   */
  $.get('data.json').done(function(data) {
    console.log(data);
  });
  console.log('data is here!');

  /*
   * Local Storage
   */

  /*
  * Local Storage with a string
  */
  localStorage.name = 'Brian';
  console.log(localStorage.name);

  /*
  * Local Storage with a number
  */
  localStorage.highScore = 42;
  console.log(localStorage.highScore);


  /*
  * Local Storage with an object
  */
  var person = {
    name: 'Brian',
    location: 'Seattle',
    occupation: 'manager',
    printFullName: function() {
      console.log(this.name);
    }
  };

  // storing the object to local storage
  localStorage.person = JSON.stringify(person);
  console.log(localStorage.person);

  // Try to parse the JSON, and handle a case where an error occurs
  try {
    console.log(JSON.parse(localStorage.person));
  } catch (error) {
    console.log(error);
    console.log('something went wrong');
  }

});
