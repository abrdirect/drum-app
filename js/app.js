
function playSound(id) {
    document.querySelector(`#${id}`).play();
}

document.addEventListener('keypress', function(){
    document.querySelector(`#clap`).play();
  });
