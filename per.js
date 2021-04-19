console.log("js start")

var a='';
var b='';
function tm(){
    a = document.getElementById('text1').value;
    b = document.getElementById('text2').value;
    c = (a/b)*100;
  document.getElementById('result').value=c;
  if (c<=100 && c>=90){
      console.log("O");
      document.getElementById('grade').value = 'O';

  }
  else if ( c < 90 && c>=80)
  {
      console.log("A+");
      document.getElementById('grade').value = 'A+';
  }
  else if ( c< 80 && c>=70)
  {
      console.log("A");
      document.getElementById('grade').value = 'A';
  }
  else if ( c< 70 && c>=60)
  {
      console.log("B+");
      document.getElementById('grade').value = 'B+';
  }
  else if ( c< 60 && c>=50)
  {
      console.log("B");
      document.getElementById('grade').value = 'B';
  }
  else if ( a>b )
  {
      console.log("error");
      document.getElementById('grade').value = 'error';
      document.getElementById('result').value = 'error';
  }
  else {
      console.log("fail");
      document.getElementById('grade').value = 'fail';
  }
  return false;
}