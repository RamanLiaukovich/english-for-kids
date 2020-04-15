document.querySelector('.nav-bar').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});


function uncheck() {
    document.getElementById('checkbox').checked = false;
}
