const baseUrl = 'http://localhost:3000';

const res = await fetch(`${baseUrl}/parts`);

const parts = await res.json();

// Get btn elements
const btnSortAscendingPrice = document.getElementById('btn-sortAscendingPrice');
const btnFilterUnaffordableParts = document.getElementById(
	'btn-filterUnaffordableParts'
);
const btnSortDescendingPrice = document.getElementById(
	'btn-sortDescendingPrice'
);
const btnFilterWithoutDescription = document.getElementById(
	'btn-filterWithoutDescription'
);

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

function addChildElement(elements) {
	const articleElement = document.createElement('article');
	const fichesElement = document.querySelector('.fiches');

	for (const element of elements) {
		articleElement.appendChild(element);
	}

	fichesElement.appendChild(articleElement);
}

function sortAscendingPrice() {
	const partsCopy = Array.from(parts);
	partsCopy.sort((a, b) => a.prix - b.prix);
	console.log(partsCopy);
}

function filterUnaffordableParts() {
	const filtredParts = parts.filter(part => part.prix <= 35);
	console.log('Parts: ', filtredParts);
}

function sortDescendingPrice() {
	const partsCopy = Array.from(parts);
	partsCopy.sort((a, b) => b.prix - a.prix);
	console.log(partsCopy);
}

function filterWithoutDescription() {
	const filtredParts = parts.filter(part => part.categorie !== undefined);
	console.log(filtredParts);
}

btnSortAscendingPrice.addEventListener('click', sortAscendingPrice);
btnFilterUnaffordableParts.addEventListener('click', filterUnaffordableParts);
btnSortDescendingPrice.addEventListener('click', sortDescendingPrice);
btnFilterWithoutDescription.addEventListener('click', filterWithoutDescription);

function getAffordablePrices() {
	return parts.filter(part => part.prix <= 35);
}

function createAffordablePrices() {
	const affordablePricesElement = document.querySelector('.affordable-prices');
	const affordableParts = getAffordablePrices();
	const ulElement = document.createElement('ul');

	for (const part of affordableParts) {
		const liElement = document.createElement('li');
		liElement.innerText = `${part.nom} - ${part.prix} €`;
		ulElement.appendChild(liElement);
	}

	affordablePricesElement.appendChild(ulElement);
}

createAffordablePrices();

function createPartsAvailable() {
	const partsAvailableElement = document.querySelector('.parts-available');
	const partsAvailable = parts.filter(part => part.disponibilite === true);

	const ulElement = document.createElement('ul');

	for (const part of partsAvailable) {
		const liElement = document.createElement('li');
		liElement.innerText = `${part.nom} - ${part.prix} €`;
		ulElement.appendChild(liElement);
	}

	partsAvailableElement.appendChild(ulElement);
}

createPartsAvailable();

//const fichesElement = (document.querySelector('.fiches').innerHTML = '');
