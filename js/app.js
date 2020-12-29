
function playSound(id) {
    const audio = document.querySelector(`#${id}`);
    audio.currentTime = 0;
    audio.play();
}

document.addEventListener('keydown', function(key) {
    const audio = document.querySelector(`[data-key="${key.code}"`);
    const keyboard = document.querySelector(`[data-keyboard="${key.code}"`);
    if (!keyboard) return;
    keyboard.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
});

document.addEventListener('keyup', function(key) {
    const keyboard = document.querySelector(`[data-keyboard="${key.code}"`);
    if (!keyboard) return;
    keyboard.classList.remove('playing');
});