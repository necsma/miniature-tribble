function myfunction(){
  var x =1024; //switch to one and one
  var y =9999 // maybe if we remove this it can then repeate multiple times

  var deg = Math.floor(Math.random() * (x - y)) + y;

  document.getElementById('box').style.transform = "rotate("+deg+"deg)";

  var element = document.getElementbyId('mainbox');
  element.classList.remove('animate');
  setTimeout(function(){
    element.classList.add('animate');
  }, 5000); //5000 = 5second 
}
