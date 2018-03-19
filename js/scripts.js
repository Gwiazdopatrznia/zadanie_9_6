var list = document.getElementById('list'),
	add  = document.getElementById('addElem');

add.addEventListener('click', function(e) {
	var element = document.createElement('li'),
		liElem = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + liElem.length;
	list.appendChild(element);
});
