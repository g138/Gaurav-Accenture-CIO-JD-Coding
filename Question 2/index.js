document.getElementById('run').addEventListener('click', isPal); // run the function on click

function isPal() {
  var palindrome_string = document.getElementById('testString').value.trim(); // get the value from the text box
  var str_len = palindrome_string.length;
  var is_palindrome = true;
  for (var i = 0; i < str_len / 2; i++) { // runnint the loop till half way
    if (palindrome_string[i] !== palindrome_string[str_len - 1 - i]) { // here comparing elements from the each end.
      is_palindrome = false;                                           // if any of the element fails to match its a false/
    }
  }
  document.getElementById('res').innerHTML = 'Result = ' + is_palindrome; // displaying the result 
  console.log(is_palindrome);
}
