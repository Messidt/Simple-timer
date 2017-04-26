// Catches <p> element
var seconds = document.getElementById('seconds');
// Catches start button
var startBtn = document.getElementById('start_button');
// Catches stop button
var stopBtn = document.getElementById('stop_button');

// Function that counts up
var countUp = function(){
    seconds.textContent = parseFloat(seconds.textContent) + 1;
}
// Function that starts counting
var startCounting = function(){
    /* Making this variable global so stopCounting function can see it*/
    counting = window.setInterval(countUp, 1000);
}

// Adding 'click' event to start_button
startBtn.addEventListener('click', startCounting);

// Function that stops counting
var stopCounting = function(){
    window.clearInterval(counting);
    seconds.textContent = 0;
}

// Adding 'click' event to stop_button
stopBtn.addEventListener('click', stopCounting);

