
document.getElementById('run').addEventListener('click', version_compare); // runs the function on click

function version_compare() {
  // getting value of v1 and v2
  var v1 = document.getElementById('v1').value.trim(); 
  var v2 = document.getElementById('v2').value.trim();

  // spliting the string on . so that it return an array of digits.
  var v1_split = v1.toString().split('.');
  var v2_split = v2.toString().split('.');
  var len_max = Math.max(v1_split.length, v2_split.length);

  // modifying array to become same length by adding 0's
  if (v1_split.length < v2_split.length) {
    var diff = len_max - v1_split.length;
    while (diff) {
      v1_split.push('0');
      diff--;
    }
  } else if (v1_split.length > v2_split.length) {
    var diff = len_max - v2_split.length;
    while (diff) {
      v2_split.push('0');
      diff--;
    }
  }

  // if the input is like "3..." will become => ["3", "", "", ""] => ["3", "0", "0", "0"]
  v1_split.forEach((ele, i) => {
    if (ele === '') {
      v1_split[i] = '0';
    }
  });
  v2_split.forEach((ele, i) => {
    if (ele === '') {
      v2_split[i] = '0';
    }
  });


  if (JSON.stringify(v1_split) === JSON.stringify(v2_split)) { // if both v1 and v2 are of same length
    document.getElementById('res').innerHTML = 'Result = ' + '0';
    return 0;
  } else {
    for (var i = 0; i < len_max; i++) { // will compare element by element of the arrays
      if (v1_split[i] > v2_split[i]) {
        document.getElementById('res').innerHTML = 'Result = ' + '1';

        return 1;
      } else if (v1_split[i] < v2_split[i]) {
        document.getElementById('res').innerHTML = 'Result = ' + '-1';

        return -1;
      }
    }
  }
}
