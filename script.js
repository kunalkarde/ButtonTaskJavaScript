document.getElementById('red-btn').addEventListener('click', function () {
    changeButtonColor('red');
});
document.getElementById('green-btn').addEventListener('click', function () {
    changeButtonColor('green');
});
document.getElementById('yellow-btn').addEventListener('click', function () {
    changeButtonColor('yellow');
});

function changeButtonColor(color) {
    var buttons = document.querySelectorAll('#button-color-change button');
    buttons.forEach(function (button) {
        button.style.backgroundColor = color;
    });
}

document.getElementById('rotate-btn').addEventListener('click', function () {
    rotateButtonColors();
});

function rotateButtonColors() {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');

    var tempColor = btn1.classList[1];
    btn1.classList = btn2.classList;
    btn2.classList = btn3.classList;
    btn3.classList = 'color-btn ' + tempColor;
}