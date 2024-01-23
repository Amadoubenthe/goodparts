const url = 'http://localhost:3000/parts';

// prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

async function getParts() {
	const res = await fetch(url);

	const parts = await res.json();

	for (const article of parts) {
		let allEment = [];
		const imgElement = document.createElement('img');
		imgElement.src = article.image;
		allEment.push(imgElement);

		const titleElement = document.createElement('h2');
		titleElement.innerText = article.nom;
		allEment.push(titleElement);

		const priceElement = document.createElement('p');
		priceElement.innerText = `Prix: ${article.prix} + €`;
		allEment.push(priceElement);

		const categoryElement = document.createElement('p');
		categoryElement.innerText = article.categorie;
		allEment.push(categoryElement);

		addChildElement(allEment);
	}
}

function addChildElement(elements) {
	const articleElement = document.createElement('article');
	const fichesElement = document.querySelector('.fiches');

	for (const element of elements) {
		articleElement.appendChild(element);
	}

	fichesElement.appendChild(articleElement);
}

getParts();
