const url = 'http://localhost:3000/parts';

async function getParts() {
	const res = await fetch(url);

	const parts = await res.json();

	console.log('Parts: ', parts);
}

getParts();
