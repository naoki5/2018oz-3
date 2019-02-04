function abc2(){
  var h =document.getElementById('both1').value;
  var w = document.getElementById('both2').value;
  alert('あなたのボディマス指数は'+(Number(w)/((Number(h)/100)*(Number(h)/100)))+'です。');
}