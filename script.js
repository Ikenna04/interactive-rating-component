const ratings = document.querySelectorAll('.ratings p'),
	btn = document.querySelector('.btn'),
	Rate = document.querySelector('.rate'),
	thank = document.querySelector('.thank'),
	thankRate = document.querySelector('.thank-rate');

let children, rate;

for (let i = 0; i < ratings.length; i++) {
	ratings[i].addEventListener('click', () => {
		if (ratings[i].parentElement.classList.contains('clicked')) {
			children = ratings[i].parentElement.children;

			for (let x = 0; x < children.length; x++) {
				children[x].classList.remove('clicked');
			}

			ratings[i].classList.add('clicked');
		} else if (!ratings[i].parentElement.classList.contains('clicked')) {
			ratings[i].classList.add('clicked');
			ratings[i].parentElement.classList.add('clicked');
		}

		rate = ratings[i].innerHTML;
	});
}

btn.addEventListener('click', () => {
	if (rate) {
		thankRate.textContent = ` rate `;
		Rate.style.display = 'none';
		thank.style.display = 'flex';
	}
});
