import { json, error } from '@sveltejs/kit';
import { SECRET_NODE_LINK } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const endpoint = `${SECRET_NODE_LINK}/predict`
    const dataPackage = await request.json()
    console.log(JSON.stringify(dataPackage))
    // const response = await fetch(endpoint, {
    //     method: "POST",
    //     headers: {
    //         "Content-type":"application/json",
    //     },
    //     body: JSON.stringify( dataPackage )
    // })

    const randNums = {garage1: {expected_occupancy: 0}, garage2: {expected_occupancy: 0}, garage3: {expected_occupancy: 0}}

    for (const num in randNums) {
        randNums[num].expected_occupancy = Math.floor(Math.random() * 400);
    }

    return json(randNums);

    // const response = await fetch(endpoint, {
    //     method: "POST",
    //     headers: {
    //         "Content-type":"application/json",
    //     },
    //     body: JSON.stringify({ inputs })
    // })
    // if (response.ok) {
    //     const data = await response.json();
    //     return json(data);
    // } else {
    //     throw new Error("Failed to fulfill POST request to express.js predict API.")
    // }
}

