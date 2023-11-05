import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const res = await fetch('https://dummyjson.com/products/' + params.taskId);
		const data1 = await res.json();
		if (data1.message) {
			throw error(404, 'Not found');
		}
		return data1;
	} catch (error) {
		throw error(404, 'Not found');
	}
}
