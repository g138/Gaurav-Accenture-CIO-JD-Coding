const num_array = new Array(50);

for (var i = 1; i <= num_array.length; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + ' (multiple of 3 and 5)');
    document.getElementById('res').innerHTML +=
      '<li>' + i + ' (multiple of 3 and 5)' + '</li>';
  } else {
    if (i % 3 === 0) {
      console.log(i + ' (multiple of 3)');
      document.getElementById('res').innerHTML +=
        '<li>' + i + ' (multiple of 3)' + '</li>';
    } else if (i % 5 === 0) {
      console.log(i + ' (multiple of 5)');
      document.getElementById('res').innerHTML +=
        '<li>' + i + ' (multiple of 5)' + '</li>';
    }
  }
}
