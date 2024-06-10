let canvas = document.getElementById('flagCanvas');
let ctx = canvas.getContext('2d');
let painting = false;
let color = 'black';

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function setColor(newColor) {
    color = newColor;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function submitForm() {
    alert('¡Formulario enviado! ¡Gracias por tu paciencia!');
}

function checkNumber() {
    let select = document.getElementById('numberSelect');
    let selectedValue = select.options[select.selectedIndex].value;
    
    if (selectedValue) {
        alert('¡Seleccionaste el número ' + selectedValue + '!');
    }
}
