function myFunction() {
  var popup = document.getElementById("myPopup");
  var infoItem = document.getElementById("infoItem");
  popup.classList.toggle("show");
  infoItem.classList.add('fall')
}



let sound = document.querySelector('#sound')
document.addEventListener('click',function(){
sound.play()
})


let video = document.querySelector('#video')

video.addEventListener('click',function(){
video.play()
})

