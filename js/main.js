var letter = prompt('Please enter a letter.');

for(i = 0; i < 10; i++) {
  for(j = 0; j < 10 - i; j++) { // inner loops for pattern in each line
    document.write(' ');
  }
  for(k = 0; k <= i; k++) {
    document.write(letter);
  }
  document.write('<br>'); // prints each line
}
