function konversi() {
  const celsius = parseFloat(document.getElementById('input-suhu').value);
  if (isNaN(celsius)) {
    alert('Masukkan nilai Celsius!');
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById('hasil-suhu').value = fahrenheit.toFixed(2);
  document.getElementById('how-to-suhu').value = `${celsius} \u00B0C x (9/5) + 32 = ${fahrenheit.toFixed(2)}\u00B0F`;
}

function reset() {
  document.getElementById('input-suhu').value = '';
  document.getElementById('hasil-suhu').value = '';
  document.getElementById('how-to-suhu').value = '';
}

function reverse() {
  const fahrenheit = parseFloat(document.getElementById('hasil-suhu').value);
  if (isNaN(fahrenheit)) {
    alert('Masukkan nilai Fahrenheit yang valid!');
    return;
  }

  const celsius = (fahrenheit - 32) * 5/9;
  document.getElementById('input-suhu').value = celsius.toFixed(2);
  document.getElementById('how-to-suhu').value = `${fahrenheit}\u00B0F - 32 x (5/9) = ${celsius.toFixed(2)}\u00B0C`;
}
