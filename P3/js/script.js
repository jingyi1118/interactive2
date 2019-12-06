function myFunction() {
  var popup = document.getElementById("myPopup");
  var infoItem = document.getElementById("infoItem");
  popup.classList.toggle("show");
  infoItem.classList.add('fall')
}

let sound = document.querySelector('#sound')
let button = document.querySelector('.button')

button.addEventListener('click',function(){
  
  button.classList.toggle('paused')
  if(!button.classList.contains('paused')){
    sound.pause()  
  } else {
    sound.play()  
  }
  
})

let video = document.querySelector('#video')

video.addEventListener('click',function(){
video.play()
})

$(document).ready(function() {
  var btn = $(".button");
  btn.click(function() {
    btn.toggleClass("paused");
    return false;
  });
});