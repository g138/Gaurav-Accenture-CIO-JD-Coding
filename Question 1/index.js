const num_array = new Array(50); // array declaration

for (var i = 1; i <= num_array.length; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // if the number return the remainder a 0 on divisble by 3 and 5
    console.log(i + ' (multiple of 3 and 5)');
    document.getElementById('res').innerHTML +=
      '<li>' + i + ' (multiple of 3 and 5)' + '</li>';
  } else {
    if (i % 3 === 0) { // only if remainder returns 0 on divisble by 3
      console.log(i + ' (multiple of 3)');
      document.getElementById('res').innerHTML +=
        '<li>' + i + ' (multiple of 3)' + '</li>';
    } else if (i % 5 === 0) { // only if remainder returns 0 on divisble by 5
      console.log(i + ' (multiple of 5)');
      document.getElementById('res').innerHTML +=
        '<li>' + i + ' (multiple of 5)' + '</li>';
    }
  }
}
