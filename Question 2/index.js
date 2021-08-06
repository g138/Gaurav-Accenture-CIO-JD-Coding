document.getElementById('run').addEventListener('click', isPal);

function isPal() {
  var palindrome_string = document.getElementById('testString').value.trim();
  var str_len = palindrome_string.length;
  var is_palindrome = true;
  for (var i = 0; i < str_len / 2; i++) {
    if (palindrome_string[i] !== palindrome_string[str_len - 1 - i]) {
      is_palindrome = false;
    }
  }
  document.getElementById('res').innerHTML = 'Result = ' + is_palindrome;
  console.log(is_palindrome);
}
