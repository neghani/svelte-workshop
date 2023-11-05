// place files you want to import through the `$lib` alias in this folder.

export async function getData() {
	const res = await fetch('https://dummyjson.com/products');
	const data = await res.json();
	return data;
}
