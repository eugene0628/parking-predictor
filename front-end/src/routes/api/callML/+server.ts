import { json, error } from '@sveltejs/kit';
import { SECRET_NODE_LINK } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {

    const endpoint = `${SECRET_NODE_LINK}/predict`
    const { garage1, garage2, garage3 } = await request.json();
    // console.log(garage1)
    // console.log(garage2)
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ garage1, garage2, garage3 })
    });
    if (response.ok) {
        const data = await response.json();
        return json(data);
    } else {
        throw new Error("Failed to fulfill POST request to callML");
    }
}

