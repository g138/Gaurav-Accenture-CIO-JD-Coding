// change parameters as required

document.getElementById('run').addEventListener('click', version_compare);

function version_compare() {
  var v1 = document.getElementById('v1').value.trim();
  var v2 = document.getElementById('v2').value.trim();

  var v1_split = v1.toString().split('.');
  var v2_split = v2.toString().split('.');
  var len_max = Math.max(v1_split.length, v2_split.length);

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

  // console.log(v1_split);
  // console.log(v2_split);

  if (JSON.stringify(v1_split) === JSON.stringify(v2_split)) {
    document.getElementById('res').innerHTML = 'Result = ' + '0';
    return 0;
  } else {
    for (var i = 0; i < len_max; i++) {
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
