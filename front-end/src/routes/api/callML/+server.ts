import { json, error } from '@sveltejs/kit';
import { SECRET_NODE_LINK } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const endpoint = `${SECRET_NODE_LINK}/predict`
    const dataPackage = await request.json()
    console.log("MARKED")
    console.log(JSON.stringify(dataPackage))
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-type":"application/json",
        },
        body: JSON.stringify( dataPackage )
    })
    if (response.ok) {
        const data = await response.json();
        return json(data);
    } else {
        throw new Error("Failed to fulfill POST request to express.js predict API.")
    }
}

