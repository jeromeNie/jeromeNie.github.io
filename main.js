var btn = document.getElementById('btn');
var modal = document.querySelector('.modal');
var close = document.querySelector('.closebtn');
btn.addEventListener('click', function () {
	modal.style.display = 'block';
});
close.addEventListener('click', function () {
	modal.style.display = 'none';
})
window.addEventListener('click', function (e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
})


